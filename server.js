const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Default curated songs to get started immediately
const DEFAULT_SONG = {
  id: 'BddP6PYo2gs', // Kesariya - Lofi / Romantic
  title: 'Kesariya (From "Brahmastra") - Romantic Vibe',
  artist: 'Arijit Singh, Pritam',
  thumbnail: 'https://img.youtube.com/vi/BddP6PYo2gs/hqdefault.jpg',
  duration: 268,
  addedBy: 'TogetherBeats'
};

// In-memory room store
// rooms[roomId] = { currentSong, playbackState, currentTime, lastUpdated, queue: [], users: {} }
const rooms = {};

function getOrCreateRoom(roomId) {
  if (!rooms[roomId]) {
    rooms[roomId] = {
      roomId,
      currentSong: { ...DEFAULT_SONG },
      playbackState: 'paused', // 'playing' | 'paused'
      currentTime: 0,
      lastUpdated: Date.now(),
      queue: [
        {
          id: 'ilNt2bikxDI',
          title: 'Raataan Lambiyan - Shershaah',
          artist: 'Jubin Nautiyal, Asees Kaur',
          thumbnail: 'https://img.youtube.com/vi/ilNt2bikxDI/hqdefault.jpg',
          duration: 230,
          addedBy: 'Curated'
        },
        {
          id: '2Fh5uWd7Rps',
          title: 'Apna Bana Le - Bhediya',
          artist: 'Arijit Singh, Sachin-Jigar',
          thumbnail: 'https://img.youtube.com/vi/2Fh5uWd7Rps/hqdefault.jpg',
          duration: 261,
          addedBy: 'Curated'
        },
        {
          id: 'gvyUuxdRdR4',
          title: 'Until I Found You - Stephen Sanchez',
          artist: 'Stephen Sanchez',
          thumbnail: 'https://img.youtube.com/vi/gvyUuxdRdR4/hqdefault.jpg',
          duration: 178,
          addedBy: 'Curated'
        }
      ],
      likedSongs: [
        {
          id: 'BddP6PYo2gs',
          title: 'Kesariya (From "Brahmāstra")',
          artist: 'Arijit Singh, Pritam',
          thumbnail: 'https://img.youtube.com/vi/BddP6PYo2gs/hqdefault.jpg',
          duration: 268,
          likedBy: 'TogetherBeats'
        }
      ],
      cities: {
        city1: 'Delhi',
        city2: 'Punjab',
        distanceKm: 450
      },
      songMemories: {
        'BddP6PYo2gs': {
          songId: 'BddP6PYo2gs',
          note: 'Our special late night song ✨ Every lyric reminds me of you.',
          author: 'TogetherBeats',
          timestamp: Date.now() - 86400000
        }
      },
      sleepTimer: null,
      sleepTimerTimeout: null,
      touchHoldingUsers: new Set(),
      users: {}
    };
  }
  return rooms[roomId];
}

// Calculate accurate current time based on last server timestamp
function calculateCurrentTime(room) {
  if (room.playbackState === 'playing') {
    const elapsedSeconds = (Date.now() - room.lastUpdated) / 1000;
    return room.currentTime + elapsedSeconds;
  }
  return room.currentTime;
}

// REST helper to search songs by name or get YouTube info
app.get('/api/search-songs', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Search query required' });

  // Check if query is direct URL or Video ID
  const directId = extractVideoId(query);
  if (directId) {
    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${directId}&format=json`;
      const response = await fetch(oembedUrl);
      if (response.ok) {
        const data = await response.json();
        return res.json([
          {
            id: directId,
            title: data.title || 'YouTube Track',
            artist: data.author_name || 'YouTube',
            thumbnail: `https://img.youtube.com/vi/${directId}/hqdefault.jpg`,
            duration: 240
          }
        ]);
      }
    } catch (e) {}
    return res.json([
      {
        id: directId,
        title: `YouTube Track (${directId})`,
        artist: 'YouTube',
        thumbnail: `https://img.youtube.com/vi/${directId}/hqdefault.jpg`,
        duration: 240
      }
    ]);
  }

  // Otherwise perform in-app search query on YouTube
  try {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' song audio')}`;
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await response.text();
    const match = html.match(/var ytInitialData = ({.*?});<\/script>/);

    if (match) {
      const data = JSON.parse(match[1]);
      const contents = data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents || [];
      const videos = contents
        .filter(c => c.videoRenderer && c.videoRenderer.videoId)
        .slice(0, 6)
        .map(c => {
          const v = c.videoRenderer;
          return {
            id: v.videoId,
            title: v.title?.runs?.[0]?.text || 'Track',
            artist: v.ownerText?.runs?.[0]?.text || 'Artist',
            thumbnail: `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`,
            duration: 240
          };
        });
      return res.json(videos);
    }
  } catch (err) {
    console.error('Search error:', err);
  }
  return res.json([]);
});

// REST helper to fetch YouTube video info via oEmbed
app.get('/api/youtube-info', async (req, res) => {
  const { url, videoId } = req.query;
  const id = videoId || extractVideoId(url);
  if (!id) {
    return res.status(400).json({ error: 'Invalid YouTube link or ID' });
  }

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
    const response = await fetch(oembedUrl);
    if (!response.ok) {
      return res.json({
        id,
        title: `YouTube Track (${id})`,
        artist: 'Unknown Artist',
        thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      });
    }
    const data = await response.json();
    return res.json({
      id,
      title: data.title || 'Unknown Track',
      artist: data.author_name || 'YouTube Music',
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    });
  } catch (err) {
    return res.json({
      id,
      title: `Track (${id})`,
      artist: 'YouTube Music',
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    });
  }
});

function extractVideoId(url) {
  if (!url) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim();
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

// WebSocket real-time synchronization
io.on('connection', (socket) => {
  let userRoomId = null;
  let userName = 'Anonymous';

  socket.on('join_room', ({ roomId, name, avatar }) => {
    userRoomId = roomId || 'couple-sanctuary';
    userName = name || 'My Love';

    socket.join(userRoomId);
    const room = getOrCreateRoom(userRoomId);

    room.users[socket.id] = {
      id: socket.id,
      name: userName,
      avatar: avatar || '❤️',
      joinedAt: Date.now()
    };

    // Calculate current running time
    const accurateTime = calculateCurrentTime(room);

    // Send full current room state to joining partner
    socket.emit('room_state', {
      currentSong: room.currentSong,
      playbackState: room.playbackState,
      currentTime: accurateTime,
      queue: room.queue,
      likedSongs: room.likedSongs || [],
      cities: room.cities,
      songMemories: room.songMemories || {},
      sleepTimer: room.sleepTimer,
      users: Object.values(room.users)
    });

    // Notify other partner about new user
    socket.to(userRoomId).emit('user_joined', {
      user: room.users[socket.id],
      users: Object.values(room.users)
    });

    io.to(userRoomId).emit('users_update', Object.values(room.users));
  });

  // Partner clicks Play
  socket.on('play', ({ time }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    room.playbackState = 'playing';
    room.currentTime = typeof time === 'number' ? time : calculateCurrentTime(room);
    room.lastUpdated = Date.now();

    // Broadcast to other partner
    socket.to(userRoomId).emit('remote_play', {
      time: room.currentTime,
      by: userName
    });
  });

  // Partner clicks Pause
  socket.on('pause', ({ time }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    room.playbackState = 'paused';
    room.currentTime = typeof time === 'number' ? time : calculateCurrentTime(room);
    room.lastUpdated = Date.now();

    socket.to(userRoomId).emit('remote_pause', {
      time: room.currentTime,
      by: userName
    });
  });

  // Partner drags seek bar (Timeline scrub)
  socket.on('seek', ({ time }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    room.currentTime = time;
    room.lastUpdated = Date.now();

    socket.to(userRoomId).emit('remote_seek', {
      time,
      by: userName
    });
  });

  // Client returns to tab and requests instant time/state resync
  socket.on('request_resync', () => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    const accurateTime = calculateCurrentTime(room);
    socket.emit('sync_correction', {
      time: accurateTime,
      playbackState: room.playbackState
    });
  });

  // Partner selects a new song or clicks next
  socket.on('change_song', ({ song }) => {
    if (!userRoomId || !song) return;
    const room = getOrCreateRoom(userRoomId);
    room.currentSong = {
      ...song,
      addedBy: userName
    };
    room.playbackState = 'playing';
    room.currentTime = 0;
    room.lastUpdated = Date.now();

    // Broadcast song change to EVERYONE in room (including sender confirmation)
    io.to(userRoomId).emit('song_changed', {
      song: room.currentSong,
      by: userName,
      currentTime: 0
    });
  });

  // Add song to shared playlist/queue
  socket.on('add_to_queue', ({ song }) => {
    if (!userRoomId || !song) return;
    const room = getOrCreateRoom(userRoomId);
    const queuedSong = {
      ...song,
      addedBy: userName,
      queueId: Date.now() + Math.random().toString(36).substring(2, 7)
    };
    room.queue.push(queuedSong);

    io.to(userRoomId).emit('queue_updated', {
      queue: room.queue,
      action: 'add',
      song: queuedSong,
      by: userName
    });
  });

  // Remove song from queue
  socket.on('remove_from_queue', ({ queueId }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    room.queue = room.queue.filter(s => s.queueId !== queueId && s.id !== queueId);

    io.to(userRoomId).emit('queue_updated', {
      queue: room.queue,
      action: 'remove',
      by: userName
    });
  });

  // Play next from queue
  socket.on('play_next', () => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    if (room.queue.length > 0) {
      const nextSong = room.queue.shift();
      room.currentSong = nextSong;
      room.playbackState = 'playing';
      room.currentTime = 0;
      room.lastUpdated = Date.now();

      io.to(userRoomId).emit('song_changed', {
        song: room.currentSong,
        by: userName,
        currentTime: 0
      });
      io.to(userRoomId).emit('queue_updated', {
        queue: room.queue,
        action: 'next',
        by: userName
      });
    }
  });

  // Toggle Like on a song (Both see and share liked songs folder)
  socket.on('toggle_like', ({ song }) => {
    if (!userRoomId || !song) return;
    const room = getOrCreateRoom(userRoomId);
    if (!room.likedSongs) room.likedSongs = [];

    const existingIdx = room.likedSongs.findIndex(s => s.id === song.id);
    let action = 'liked';
    if (existingIdx >= 0) {
      room.likedSongs.splice(existingIdx, 1);
      action = 'unliked';
    } else {
      room.likedSongs.unshift({
        ...song,
        likedBy: userName,
        likedAt: Date.now()
      });
      action = 'liked';
    }

    io.to(userRoomId).emit('likes_updated', {
      likedSongs: room.likedSongs,
      song,
      action,
      by: userName
    });
  });

  // Romantic features: Heart reaction burst
  socket.on('send_heart', ({ type, note }) => {
    if (!userRoomId) return;
    socket.to(userRoomId).emit('heart_received', {
      from: userName,
      type: type || '❤️',
      note: note || ''
    });
  });

  // Feature 1: Cities & Distance Update
  socket.on('update_cities', ({ city1, city2, distanceKm }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    room.cities = {
      city1: city1 || 'Delhi',
      city2: city2 || 'Punjab',
      distanceKm: Math.round(Number(distanceKm)) || 450
    };
    io.to(userRoomId).emit('cities_updated', {
      cities: room.cities,
      by: userName
    });
  });

  // Feature 2: 5-Second Voice Whisper with Ducking
  socket.on('voice_whisper', ({ audio, duration }) => {
    if (!userRoomId || !audio) return;
    const room = getOrCreateRoom(userRoomId);
    const userAvatar = room.users[socket.id]?.avatar || '❤️';
    socket.to(userRoomId).emit('voice_whisper_received', {
      from: userName,
      avatar: userAvatar,
      audio,
      duration: duration || 5,
      timestamp: Date.now()
    });
  });

  // Feature 4: Song Memories (Digital Polaroid Note)
  socket.on('save_song_memory', ({ songId, note }) => {
    if (!userRoomId || !songId) return;
    const room = getOrCreateRoom(userRoomId);
    if (!room.songMemories) room.songMemories = {};
    room.songMemories[songId] = {
      songId,
      note: (note || '').trim(),
      author: userName,
      timestamp: Date.now()
    };
    io.to(userRoomId).emit('song_memory_saved', {
      songId,
      memory: room.songMemories[songId],
      by: userName
    });
  });

  socket.on('delete_song_memory', ({ songId }) => {
    if (!userRoomId || !songId) return;
    const room = getOrCreateRoom(userRoomId);
    if (room.songMemories && room.songMemories[songId]) {
      delete room.songMemories[songId];
      io.to(userRoomId).emit('song_memory_deleted', {
        songId,
        by: userName
      });
    }
  });

  // Feature 5: Synchronized Sleep Timer (Together Fade-Out)
  socket.on('set_sleep_timer', ({ minutes }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    const durationMinutes = Math.max(1, Number(minutes) || 15);
    const endsAt = Date.now() + durationMinutes * 60 * 1000;

    if (room.sleepTimerTimeout) {
      clearTimeout(room.sleepTimerTimeout);
      room.sleepTimerTimeout = null;
    }

    room.sleepTimer = {
      endsAt,
      durationMinutes,
      setBy: userName
    };

    room.sleepTimerTimeout = setTimeout(() => {
      room.playbackState = 'paused';
      room.currentTime = calculateCurrentTime(room);
      room.lastUpdated = Date.now();
      room.sleepTimer = null;
      room.sleepTimerTimeout = null;

      io.to(userRoomId).emit('sleep_timer_fired', {
        by: userName,
        message: 'Sleep timer completed. Sweet dreams, sleep well! 🌙✨'
      });
      io.to(userRoomId).emit('remote_pause', {
        time: room.currentTime,
        by: 'Sleep Timer 🌙'
      });
    }, durationMinutes * 60 * 1000);

    io.to(userRoomId).emit('sleep_timer_updated', {
      sleepTimer: room.sleepTimer,
      by: userName
    });
  });

  socket.on('cancel_sleep_timer', () => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    if (room.sleepTimerTimeout) {
      clearTimeout(room.sleepTimerTimeout);
      room.sleepTimerTimeout = null;
    }
    room.sleepTimer = null;
    io.to(userRoomId).emit('sleep_timer_cancelled', { by: userName });
  });

  // Feature 6: Touch Together (Hold Hands Haptic & Aura)
  socket.on('touch_heart_down', () => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    if (!room.touchHoldingUsers) room.touchHoldingUsers = new Set();
    room.touchHoldingUsers.add(socket.id);

    if (room.touchHoldingUsers.size >= 2) {
      io.to(userRoomId).emit('together_touch_active', {
        activeCount: room.touchHoldingUsers.size
      });
    } else {
      socket.to(userRoomId).emit('partner_touch_waiting', {
        from: userName
      });
    }
  });

  socket.on('touch_heart_up', () => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    if (!room.touchHoldingUsers) room.touchHoldingUsers = new Set();
    room.touchHoldingUsers.delete(socket.id);

    if (room.touchHoldingUsers.size < 2) {
      io.to(userRoomId).emit('together_touch_ended', {
        from: userName
      });
    }
  });

  // Romantic whispers / sweet chat
  socket.on('send_message', ({ message }) => {
    if (!userRoomId || !message) return;
    io.to(userRoomId).emit('new_message', {
      from: userName,
      message,
      timestamp: Date.now(),
      senderId: socket.id
    });
  });

  // Periodic drift check / heartbeat
  socket.on('heartbeat', ({ currentTime }) => {
    if (!userRoomId) return;
    const room = getOrCreateRoom(userRoomId);
    const expectedTime = calculateCurrentTime(room);

    // If drift is significant (> 2.5 seconds) and room is playing, respond with correction
    if (room.playbackState === 'playing' && Math.abs(expectedTime - currentTime) > 2.5) {
      socket.emit('sync_correction', {
        time: expectedTime,
        playbackState: room.playbackState
      });
    }
  });

  // Partner disconnects
  socket.on('disconnect', () => {
    if (userRoomId && rooms[userRoomId]) {
      const room = rooms[userRoomId];
      if (room.touchHoldingUsers) {
        room.touchHoldingUsers.delete(socket.id);
        if (room.touchHoldingUsers.size < 2) {
          io.to(userRoomId).emit('together_touch_ended', { from: userName });
        }
      }

      if (room.users[socket.id]) {
        const leftUser = room.users[socket.id];
        delete room.users[socket.id];

        io.to(userRoomId).emit('user_left', {
          user: leftUser,
          users: Object.values(room.users)
        });
        io.to(userRoomId).emit('users_update', Object.values(room.users));
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`TogetherBeats couple music server running on http://localhost:${PORT}`);
});
