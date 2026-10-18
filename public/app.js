/* =========================================================
   TogetherBeats ❤️ Client Real-time Sync & Player Engine
   ========================================================= */

// --- Quick Curated Songs & Mood Playlists ---
const CURATED_PICKS = [
  {
    id: 'BddP6PYo2gs',
    title: 'Kesariya (From "Brahmāstra")',
    artist: 'Arijit Singh, Pritam',
    thumbnail: 'https://img.youtube.com/vi/BddP6PYo2gs/hqdefault.jpg',
    duration: 268
  },
  {
    id: 'ilNt2bikxDI',
    title: 'Raataan Lambiyan - Shershaah',
    artist: 'Jubin Nautiyal, Asees Kaur',
    thumbnail: 'https://img.youtube.com/vi/ilNt2bikxDI/hqdefault.jpg',
    duration: 230
  },
  {
    id: 'ElZfdU54Cp8',
    title: 'Apna Bana Le - Bhediya',
    artist: 'Arijit Singh, Sachin-Jigar',
    thumbnail: 'https://img.youtube.com/vi/ElZfdU54Cp8/hqdefault.jpg',
    duration: 261
  },
  {
    id: 'gvyUuxdRdR4',
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    thumbnail: 'https://img.youtube.com/vi/gvyUuxdRdR4/hqdefault.jpg',
    duration: 178
  },
  {
    id: 'JFcgOboQZ08',
    title: 'Dandelions - Slowed + Reverb',
    artist: 'Ruth B.',
    thumbnail: 'https://img.youtube.com/vi/JFcgOboQZ08/hqdefault.jpg',
    duration: 234
  },
  {
    id: 's8XIgR5OGJc',
    title: 'Pee Loon - Once Upon A Time',
    artist: 'Mohit Chauhan, Pritam',
    thumbnail: 'https://img.youtube.com/vi/s8XIgR5OGJc/hqdefault.jpg',
    duration: 280
  }
];

const MOOD_FOLDERS = [
  {
    id: 'bollywood',
    title: 'Bollywood Romance 🌹',
    desc: 'Soulful classics, Arijit, Atif & Mohit Chauhan',
    cover: 'https://img.youtube.com/vi/ElZfdU54Cp8/hqdefault.jpg',
    songs: [
      { id: 'ElZfdU54Cp8', title: 'Apna Bana Le', artist: 'Arijit Singh, Sachin-Jigar' },
      { id: 'BddP6PYo2gs', title: 'Kesariya', artist: 'Arijit Singh, Pritam' },
      { id: 'ilNt2bikxDI', title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal, Asees Kaur' },
      { id: 'm_jK934aBoc', title: 'Tum Se Hi (Jab We Met)', artist: 'Mohit Chauhan, Pritam' },
      { id: '284Ov7ysmfA', title: 'Channa Mereya', artist: 'Arijit Singh, Pritam' },
      { id: 'BadB1z-V_qU', title: 'Pehli Nazar Mein', artist: 'Atif Aslam, Pritam' },
      { id: 'sK7riqg2mr4', title: 'Agar Tum Saath Ho', artist: 'Alka Yagnik, Arijit Singh' },
      { id: 'sU4b54e3Nrg', title: 'Tera Ban Jaunga', artist: 'Akhil Sachdeva, Tulsi Kumar' }
    ]
  },
  {
    id: 'lofi',
    title: 'Midnight Lofi Chill 🌙',
    desc: 'Soft aesthetic beats for late night deep talks',
    cover: 'https://img.youtube.com/vi/BddP6PYo2gs/hqdefault.jpg',
    songs: [
      { id: 'BddP6PYo2gs', title: 'Kesariya (Lofi Chill)', artist: 'Arijit Singh, Pritam' },
      { id: 'x3bdP4pW1sA', title: 'Iktara - Lofi Flip', artist: 'Amit Trivedi, Kavita Seth' },
      { id: 'jHNNMj5bNQw', title: 'Kabira - Midnight Lofi', artist: 'Tochi Raina, Rekha Bhardwaj' },
      { id: 'P8PWN1OmZOA', title: 'Tu Jaane Na - Chill Lofi', artist: 'Atif Aslam, Pritam' },
      { id: 'y_q5p0J9pWw', title: 'Shayad - Aesthetic Lofi', artist: 'Arijit Singh, Pritam' },
      { id: 'mevO4I0Hy5g', title: 'Dil Diyan Gallan - Lofi', artist: 'Atif Aslam' }
    ]
  },
  {
    id: 'acoustic',
    title: 'Soulful Acoustic Love 🎸',
    desc: 'Unplugged guitars, gentle vocals & live strings',
    cover: 'https://img.youtube.com/vi/s8XIgR5OGJc/hqdefault.jpg',
    songs: [
      { id: 's8XIgR5OGJc', title: 'Pee Loon (Once Upon A Time)', artist: 'Mohit Chauhan, Pritam' },
      { id: 'kdcZ3ZqLp-A', title: 'Jeena Jeena (Unplugged Acoustic)', artist: 'Atif Aslam' },
      { id: 'hhdSl3Nwsc8', title: 'Zaalima (Acoustic Guitar)', artist: 'Arijit Singh, Harshdeep Kaur' },
      { id: 'L_X9pE0xPew', title: 'Hasi (Acoustic Version)', artist: 'Ami Mishra' },
      { id: 'H2f7MZUsvVE', title: 'Samjhawan (Unplugged)', artist: 'Alia Bhatt, Sharib-Toshi' }
    ]
  },
  {
    id: 'latenight',
    title: 'English Pop & Retro 💫',
    desc: 'Golden hour, Stephen Sanchez, Ruth B & Ed Sheeran',
    cover: 'https://img.youtube.com/vi/gvyUuxdRdR4/hqdefault.jpg',
    songs: [
      { id: 'gvyUuxdRdR4', title: 'Until I Found You', artist: 'Stephen Sanchez' },
      { id: 'W8a4sUabCUo', title: 'Dandelions', artist: 'Ruth B.' },
      { id: 'PEM0Vs8jf1w', title: 'Golden Hour', artist: 'JVKE' },
      { id: '2Vv-BfVoq4g', title: 'Perfect', artist: 'Ed Sheeran' },
      { id: '4b4bYmB2s_s', title: 'Those Eyes', artist: 'New West' },
      { id: 'syFZfO_WFMQ', title: 'Night Changes', artist: 'One Direction' }
    ]
  },
  {
    id: 'slowed',
    title: 'Slowed + Reverb Cloud ☁️',
    desc: 'Dreamy echoes, Anuv Jain & late night nostalgia',
    cover: 'https://img.youtube.com/vi/JFcgOboQZ08/hqdefault.jpg',
    songs: [
      { id: 'JFcgOboQZ08', title: 'Dandelions (Slowed + Reverb)', artist: 'Ruth B.' },
      { id: 'g39j3n3Hh2o', title: 'Baarishein (Slowed + Reverb)', artist: 'Anuv Jain' },
      { id: 'k4nK8259hFw', title: 'Alag Aasmaan (Slowed)', artist: 'Anuv Jain' },
      { id: 'b0b46_8rW4Y', title: 'Husn (Slowed + Reverb)', artist: 'Anuv Jain' },
      { id: 'cWMxCE2HTag', title: 'Choo Lo (Slowed + Reverb)', artist: 'The Local Train' }
    ]
  }
];

// --- State Variables ---
let socket = null;
let ytPlayer = null;
let ytPlayerReady = false;
let isSyncing = false; // Flag to prevent infinite feedback loops
let currentSong = null;
let playbackState = 'paused'; // 'playing' | 'paused'
let queue = [];
let likedSongs = [];
let searchHistory = JSON.parse(localStorage.getItem('tb_search_history') || '[]');
let currentOpenedFolder = null;
let localVolume = parseInt(localStorage.getItem('tb_volume') || '80', 10);
let isMuted = false;
let myName = localStorage.getItem('tb_name') || '';
let myAvatar = localStorage.getItem('tb_avatar') || '❤️';
let roomId = getRoomIdFromUrl();
let activeTab = 'add';
let previewSongData = null;
let progressUpdateTimer = null;
let heartbeatTimer = null;

// DOM Elements
const vinylRecord = document.getElementById('vinylRecord');
const tonearm = document.getElementById('tonearm');
const vinylCover = document.getElementById('vinylCover');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const addedByName = document.getElementById('addedByName');
const waveVisualizer = document.getElementById('waveVisualizer');
const currentTimeLabel = document.getElementById('currentTimeLabel');
const totalDurationLabel = document.getElementById('totalDurationLabel');
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBarFill = document.getElementById('progressBarFill');
const progressBarThumb = document.getElementById('progressBarThumb');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const likeSongBtn = document.getElementById('likeSongBtn');
const likeIconOutline = document.getElementById('likeIconOutline');
const likeIconFilled = document.getElementById('likeIconFilled');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValueLabel = document.getElementById('volumeValueLabel');
const volumeHighIcon = document.getElementById('volumeHighIcon');
const volumeMutedIcon = document.getElementById('volumeMutedIcon');
const syncStatusBadge = document.getElementById('syncStatusBadge');
const syncStatusText = document.getElementById('syncStatusText');
const toastContainer = document.getElementById('toastContainer');
const heartCanvasContainer = document.getElementById('heartCanvasContainer');
const yourNameDisplay = document.getElementById('yourNameDisplay');
const yourAvatarDisplay = document.getElementById('yourAvatar');
const otherNameDisplay = document.getElementById('otherNameDisplay');
const otherAvatarDisplay = document.getElementById('otherAvatar');
const otherStatusDot = document.getElementById('otherStatusDot');
const queueList = document.getElementById('queueList');
const queueCount = document.getElementById('queueCount');
const emptyQueueMsg = document.getElementById('emptyQueueMsg');
const likesList = document.getElementById('likesList');
const likesCount = document.getElementById('likesCount');
const emptyLikesMsg = document.getElementById('emptyLikesMsg');
const searchHistoryWrapper = document.getElementById('searchHistoryWrapper');
const historyChips = document.getElementById('historyChips');
const moodsGridView = document.getElementById('moodsGridView');
const folderDetailView = document.getElementById('folderDetailView');
const openedFolderTitle = document.getElementById('openedFolderTitle');
const folderSongsList = document.getElementById('folderSongsList');
const quickPicksList = document.getElementById('quickPicksList');
const moodGrid = document.getElementById('moodGrid');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatUnreadDot = document.getElementById('chatUnreadDot');
const songInput = document.getElementById('songInput');
const songPreviewBox = document.getElementById('songPreviewBox');
const previewThumbnail = document.getElementById('previewThumbnail');
const previewTitle = document.getElementById('previewTitle');
const previewArtist = document.getElementById('previewArtist');
const nameModal = document.getElementById('nameModal');
const inputProfileName = document.getElementById('inputProfileName');
const videoOverlay = document.getElementById('videoOverlay');
const miniPlayIcon = document.getElementById('miniPlayIcon');
const miniPauseIcon = document.getElementById('miniPauseIcon');
const miniSongTitle = document.getElementById('miniSongTitle');
const miniSongArtist = document.getElementById('miniSongArtist');
const miniProgressFill = document.getElementById('miniProgressFill');
const upNextPreviewText = document.getElementById('upNextPreviewText');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  renderQuickPicks();
  renderMoods();
  renderSearchHistory();
  initVolume();

  if (!myName) {
    myName = 'Love ' + Math.floor(Math.random() * 899 + 100);
    localStorage.setItem('tb_name', myName);
  }
  updateProfileUI();

  initSocket();
  setupProgressBarEvents();
});

// --- URL & Room Management ---
function getRoomIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  let r = params.get('room');
  if (!r) {
    r = 'sweethearts-room';
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?room=${r}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  }
  return r;
}

function copyInviteLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('💌 Room link copied! Send it to your partner to listen together.');
    const btnText = document.getElementById('inviteBtnText');
    const originalText = btnText.innerText;
    btnText.innerText = 'Copied to Clipboard! ✨';
    setTimeout(() => {
      btnText.innerText = originalText;
    }, 2500);
  }).catch(() => {
    prompt('Copy this room link and send to your partner:', url);
  });
}

// --- Socket.IO Real-time Connection ---
function initSocket() {
  socket = io();

  socket.on('connect', () => {
    console.log('Connected to TogetherBeats server with ID:', socket.id);
    socket.emit('join_room', {
      roomId,
      name: myName,
      avatar: myAvatar
    });
  });

  // Received initial room state
  socket.on('room_state', (data) => {
    console.log('Room state received:', data);
    currentSong = data.currentSong;
    playbackState = data.playbackState;
    queue = data.queue || [];
    likedSongs = data.likedSongs || [];
    renderQueue();
    renderLikedSongs();
    updateSongMetadata(currentSong);
    updateLikeButtonState();

    if (ytPlayerReady && currentSong) {
      loadSongIntoPlayer(currentSong.id, data.currentTime, playbackState === 'playing');
    }

    updateControlsUI();
    updateUsersList(data.users);
  });

  // Remote partner clicked Play
  socket.on('remote_play', ({ time, by }) => {
    console.log(`${by} played at ${time}`);
    showToast(`▶️ ${by} started playback`);
    isSyncing = true;
    playbackState = 'playing';
    updateControlsUI();

    if (ytPlayer && ytPlayerReady) {
      if (typeof time === 'number' && Math.abs(ytPlayer.getCurrentTime() - time) > 1.2) {
        ytPlayer.seekTo(time, true);
      }
      ytPlayer.playVideo();
    }
    setTimeout(() => { isSyncing = false; }, 600);
  });

  // Remote partner clicked Pause
  socket.on('remote_pause', ({ time, by }) => {
    console.log(`${by} paused at ${time}`);
    showToast(`⏸️ ${by} paused playback`);
    isSyncing = true;
    playbackState = 'paused';
    updateControlsUI();

    if (ytPlayer && ytPlayerReady) {
      if (typeof time === 'number' && Math.abs(ytPlayer.getCurrentTime() - time) > 1.2) {
        ytPlayer.seekTo(time, true);
      }
      ytPlayer.pauseVideo();
    }
    setTimeout(() => { isSyncing = false; }, 600);
  });

  // Remote partner scrubbed timeline (Seek)
  socket.on('remote_seek', ({ time, by }) => {
    console.log(`${by} scrubbed to ${formatTime(time)}`);
    showToast(`⏩ ${by} jumped to ${formatTime(time)}`);
    isSyncing = true;
    if (ytPlayer && ytPlayerReady) {
      ytPlayer.seekTo(time, true);
    }
    updateProgressUI(time, currentSong ? currentSong.duration : 0);
    setTimeout(() => { isSyncing = false; }, 600);
  });

  // Song changed by either partner
  socket.on('song_changed', ({ song, by, currentTime }) => {
    currentSong = song;
    playbackState = 'playing';
    showToast(`🎵 ${by} played: ${song.title}`);
    updateSongMetadata(song);
    updateControlsUI();

    isSyncing = true;
    if (ytPlayer && ytPlayerReady) {
      loadSongIntoPlayer(song.id, currentTime || 0, true);
    }
    setTimeout(() => { isSyncing = false; }, 1000);
  });

  // Queue updated
  socket.on('queue_updated', (data) => {
    queue = data.queue || [];
    renderQueue();
    if (data.action === 'add') {
      showToast(`+ Added to queue by ${data.by}: ${data.song.title}`);
    }
  });

  // Likes updated (liked/unliked)
  socket.on('likes_updated', (data) => {
    likedSongs = data.likedSongs || [];
    renderLikedSongs();
    updateLikeButtonState();
    if (data.action === 'liked') {
      showToast(`❤️ ${data.by} saved to Liked Songs: ${data.song.title}`);
    } else {
      showToast(`Removed from Liked Songs: ${data.song.title}`);
    }
  });

  // Heart love burst received
  socket.on('heart_received', (data) => {
    spawnFloatingHearts(16, data.type);
    showToast(`${data.from} sent you love ${data.type}`);
  });

  // Live whisper chat message
  socket.on('new_message', (data) => {
    appendChatMessage(data);
    if (activeTab !== 'chat') {
      chatUnreadDot.classList.remove('hidden');
    }
  });

  // Users update (partner joined/left)
  socket.on('users_update', (users) => {
    updateUsersList(users);
  });

  socket.on('user_joined', ({ user }) => {
    showToast(`✨ ${user.name} joined your room! ❤️`);
  });

  socket.on('user_left', ({ user }) => {
    showToast(`💨 ${user.name} stepped out for a moment`);
  });

  // Drift correction
  socket.on('sync_correction', ({ time, playbackState: state }) => {
    if (ytPlayer && ytPlayerReady) {
      isSyncing = true;
      ytPlayer.seekTo(time, true);
      if (state === 'playing') ytPlayer.playVideo();
      setTimeout(() => { isSyncing = false; }, 600);
    }
  });

  // Heartbeat periodic drift check
  if (heartbeatTimer) clearInterval(heartbeatTimer);
  heartbeatTimer = setInterval(() => {
    if (ytPlayer && ytPlayerReady && playbackState === 'playing') {
      socket.emit('heartbeat', {
        currentTime: ytPlayer.getCurrentTime()
      });
    }
  }, 5000);
}

// --- YouTube IFrame API Integration ---
function initYouTubePlayer() {
  if (ytPlayerReady || ytPlayer) return;
  if (!window.YT || !window.YT.Player) {
    console.log('YT API not ready yet, waiting...');
    return;
  }

  console.log('YouTube Iframe API is ready. Initializing player...');
  try {
    ytPlayer = new YT.Player('youtubePlayerContainer', {
      height: '100%',
      width: '100%',
      videoId: currentSong ? currentSong.id : 'BddP6PYo2gs',
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        enablejsapi: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  } catch (err) {
    console.error('Error creating YT.Player:', err);
  }
}

window.onYouTubeIframeAPIReady = initYouTubePlayer;

// In case the YouTube API script finished loading before app.js was evaluated
if (window.YT && window.YT.Player) {
  initYouTubePlayer();
} else {
  let ytCheckCount = 0;
  const ytCheckTimer = setInterval(() => {
    ytCheckCount++;
    if (window.YT && window.YT.Player) {
      clearInterval(ytCheckTimer);
      initYouTubePlayer();
    } else if (ytCheckCount > 30) {
      clearInterval(ytCheckTimer);
      console.warn('YouTube API took too long to load.');
    }
  }, 400);
}

function onPlayerReady(event) {
  ytPlayerReady = true;
  console.log('YouTube Player is fully initialized and ready!');
  try {
    ytPlayer.setVolume(localVolume);
  } catch (e) {}

  if (currentSong) {
    updateSongMetadata(currentSong);
    loadSongIntoPlayer(currentSong.id, 0, playbackState === 'playing');
  }

  startProgressLoop();
  showToast('✨ Audio player ready! Hit Play to listen together ❤️');
}

function onPlayerError(e) {
  console.error('YouTube Player Error code:', e.data);
  // Code 101/150 = owner blocked embedding, code 100 = video removed
  if (e.data === 150 || e.data === 101 || e.data === 100) {
    showToast('Track blocked on YouTube. Skipping to next song...');
    socket.emit('play_next');
  }
}

function onPlayerStateChange(event) {
  // If we are currently syncing a remote command, ignore triggering local events!
  if (isSyncing) return;

  if (event.data === YT.PlayerState.PLAYING) {
    if (playbackState !== 'playing') {
      playbackState = 'playing';
      updateControlsUI();
      startBackgroundKeepAlive();
      socket.emit('play', { time: ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0 });
    }
  } else if (event.data === YT.PlayerState.PAUSED) {
    // If browser auto-paused because user switched tab or app, DO NOT pause partner!
    if (document.hidden) {
      console.log('Tab minimized/switched app. Preserving partner playback state in Punjab.');
      return;
    }
    if (playbackState !== 'paused') {
      playbackState = 'paused';
      updateControlsUI();
      pauseBackgroundKeepAlive();
      socket.emit('pause', { time: ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0 });
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    console.log('Song ended. Playing next from queue automatically...');
    socket.emit('play_next');
  }
}

// --- Mobile Background & Tab-Switch Protection ---
let bgKeepAliveAudio = null;

function startBackgroundKeepAlive() {
  try {
    if (!bgKeepAliveAudio) {
      bgKeepAliveAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      bgKeepAliveAudio.loop = true;
    }
    bgKeepAliveAudio.play().catch(() => {});
  } catch (e) {}
}

function pauseBackgroundKeepAlive() {
  try {
    if (bgKeepAliveAudio) {
      bgKeepAliveAudio.pause();
    }
  } catch (e) {}
}

// When returning to tab from another app or lockscreen, auto-resume smoothly
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    console.log('App returned to active focus! Checking playback and resyncing...');
    if (socket && socket.connected) {
      socket.emit('request_resync');
    }
    if (playbackState === 'playing' && ytPlayer && ytPlayerReady) {
      try {
        const state = ytPlayer.getPlayerState ? ytPlayer.getPlayerState() : -1;
        if (state !== YT.PlayerState.PLAYING) {
          isSyncing = true;
          ytPlayer.playVideo();
          startBackgroundKeepAlive();
          setTimeout(() => { isSyncing = false; }, 800);
        }
      } catch (e) {}
    }
  }
});

function loadSongIntoPlayer(videoId, startSeconds = 0, autoPlay = true) {
  if (!ytPlayer || !ytPlayerReady) return;

  try {
    if (autoPlay) {
      ytPlayer.loadVideoById({
        videoId,
        startSeconds: startSeconds || 0
      });
    } else {
      ytPlayer.cueVideoById({
        videoId,
        startSeconds: startSeconds || 0
      });
    }
  } catch (err) {
    console.error('loadSong error:', err);
  }
}

// --- UI Updates & Controls (Both partners have full control) ---
function handlePlayPauseToggle() {
  if (!ytPlayerReady) {
    if (!ytPlayer && window.YT && window.YT.Player) {
      initYouTubePlayer();
    }
    showToast('Player is initializing, please tap again in a moment... ⏳');
    return;
  }

  if (playbackState === 'playing') {
    // Local pause -> broadcast pause
    playbackState = 'paused';
    updateControlsUI();
    pauseBackgroundKeepAlive();
    try {
      ytPlayer.pauseVideo();
    } catch (e) {}
    socket.emit('pause', { time: ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0 });
  } else {
    // Local play -> broadcast play
    playbackState = 'playing';
    updateControlsUI();
    startBackgroundKeepAlive();
    try {
      ytPlayer.unMute();
      ytPlayer.setVolume(localVolume);
      ytPlayer.playVideo();
    } catch (e) {}
    socket.emit('play', { time: ytPlayer.getCurrentTime ? ytPlayer.getCurrentTime() : 0 });
  }
}


function handleNextSong() {
  if (queue.length > 0) {
    socket.emit('play_next');
  } else {
    showToast('No more songs in queue! Add some tracks to keep playing.');
  }
}

function handlePrevSong() {
  if (!ytPlayer || !ytPlayerReady) return;
  const curr = ytPlayer.getCurrentTime();
  if (curr > 3) {
    ytPlayer.seekTo(0, true);
    socket.emit('seek', { time: 0 });
    showToast('Restarted current song');
  } else {
    ytPlayer.seekTo(0, true);
    socket.emit('seek', { time: 0 });
  }
}

function updateControlsUI() {
  if (playbackState === 'playing') {
    if (playIcon) playIcon.classList.add('hidden');
    if (pauseIcon) pauseIcon.classList.remove('hidden');
    if (miniPlayIcon) miniPlayIcon.classList.add('hidden');
    if (miniPauseIcon) miniPauseIcon.classList.remove('hidden');
    if (vinylRecord) vinylRecord.classList.add('spinning');
    if (tonearm) tonearm.classList.add('active');
    if (waveVisualizer) waveVisualizer.classList.add('playing');
    if (syncStatusText) syncStatusText.innerText = '⚡ Playing in Sync with Partner';
  } else {
    if (playIcon) playIcon.classList.remove('hidden');
    if (pauseIcon) pauseIcon.classList.add('hidden');
    if (miniPlayIcon) miniPlayIcon.classList.remove('hidden');
    if (miniPauseIcon) miniPauseIcon.classList.add('hidden');
    if (vinylRecord) vinylRecord.classList.remove('spinning');
    if (tonearm) tonearm.classList.remove('active');
    if (waveVisualizer) waveVisualizer.classList.remove('playing');
    if (syncStatusText) syncStatusText.innerText = '⏸️ Playback Paused (Both in Sync)';
  }
}

function updateSongMetadata(song) {
  if (!song) return;
  if (songTitle) songTitle.innerText = song.title || 'Unknown Track';
  if (songArtist) songArtist.innerText = song.artist || 'YouTube Music';
  if (miniSongTitle) miniSongTitle.innerText = song.title || 'Unknown Track';
  if (miniSongArtist) miniSongArtist.innerText = song.artist || 'YouTube Music';
  if (addedByName) addedByName.innerText = song.addedBy || 'TogetherBeats ❤️';
  const thumbUrl = song.thumbnail || (song.id ? `https://img.youtube.com/vi/${song.id}/hqdefault.jpg` : '');
  if (thumbUrl && vinylCover) {
    vinylCover.src = thumbUrl;
  }

  // --- Mobile Lockscreen & Notification Shade Media Controls (MediaSession API) ---
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title || 'TogetherBeats Song',
      artist: song.artist || 'TogetherBeats ❤️',
      album: 'TogetherBeats Special',
      artwork: [
        { src: thumbUrl, sizes: '512x512', type: 'image/jpeg' }
      ]
    });

    try {
      navigator.mediaSession.setActionHandler('play', () => handlePlayPauseToggle());
      navigator.mediaSession.setActionHandler('pause', () => handlePlayPauseToggle());
      navigator.mediaSession.setActionHandler('previoustrack', () => handlePrevSong());
      navigator.mediaSession.setActionHandler('nexttrack', () => handleNextSong());
    } catch (e) {
      console.log('MediaSession action handler error:', e);
    }
  }

  updateLikeButtonState();
}

// --- Timeline & Scrubber ---
function startProgressLoop() {
  if (progressUpdateTimer) clearInterval(progressUpdateTimer);
  progressUpdateTimer = setInterval(() => {
    if (ytPlayer && ytPlayerReady && playbackState === 'playing') {
      const curr = ytPlayer.getCurrentTime() || 0;
      const total = ytPlayer.getDuration() || (currentSong ? currentSong.duration : 0) || 0;
      updateProgressUI(curr, total);
    }
  }, 500);
}

function updateProgressUI(curr, total) {
  if (currentTimeLabel) currentTimeLabel.innerText = formatTime(curr);
  if (total > 0) {
    if (totalDurationLabel) totalDurationLabel.innerText = formatTime(total);
    const percent = Math.min(100, Math.max(0, (curr / total) * 100));
    if (progressBarFill) progressBarFill.style.width = `${percent}%`;
    if (progressBarThumb) progressBarThumb.style.left = `${percent}%`;
    if (miniProgressFill) miniProgressFill.style.width = `${percent}%`;
  }
}

function setupProgressBarEvents() {
  let isDragging = false;

  const seekFromEvent = (e) => {
    if (!ytPlayer || !ytPlayerReady) return;
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = clickX / rect.width;
    const total = ytPlayer.getDuration() || (currentSong ? currentSong.duration : 0) || 1;
    const targetTime = percent * total;

    updateProgressUI(targetTime, total);
    ytPlayer.seekTo(targetTime, true);
    socket.emit('seek', { time: targetTime });
  };

  progressBarContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    seekFromEvent(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      seekFromEvent(e);
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- Volume (Personal / Local) ---
function initVolume() {
  volumeSlider.value = localVolume;
  volumeValueLabel.innerText = `${localVolume}%`;
}

function handleVolumeChange(val) {
  localVolume = parseInt(val, 10);
  localStorage.setItem('tb_volume', localVolume);
  volumeValueLabel.innerText = `${localVolume}%`;

  if (ytPlayer && ytPlayerReady) {
    ytPlayer.setVolume(localVolume);
    if (localVolume === 0) {
      ytPlayer.mute();
      volumeHighIcon.classList.add('hidden');
      volumeMutedIcon.classList.remove('hidden');
    } else {
      ytPlayer.unMute();
      volumeHighIcon.classList.remove('hidden');
      volumeMutedIcon.classList.add('hidden');
    }
  }
}

function toggleMute() {
  if (!ytPlayer || !ytPlayerReady) return;
  if (isMuted) {
    ytPlayer.unMute();
    ytPlayer.setVolume(localVolume);
    volumeHighIcon.classList.remove('hidden');
    volumeMutedIcon.classList.add('hidden');
    isMuted = false;
  } else {
    ytPlayer.mute();
    volumeHighIcon.classList.add('hidden');
    volumeMutedIcon.classList.remove('hidden');
    isMuted = true;
  }
}

// --- Tabs Switching ---
function switchTab(tabName) {
  activeTab = tabName;
  ['Add', 'Likes', 'Queue', 'Moods', 'Chat'].forEach(t => {
    const btn = document.getElementById(`tab${t}Btn`);
    const content = document.getElementById(`tabContent${t}`);
    if (btn && content) {
      if (t.toLowerCase() === tabName.toLowerCase()) {
        btn.classList.add('active');
        content.classList.add('active');
      } else {
        btn.classList.remove('active');
        content.classList.remove('active');
      }
    }
  });

  if (tabName === 'chat' && chatUnreadDot) {
    chatUnreadDot.classList.add('hidden');
  }

  // Update Bottom Nav Bar active states across all bars
  document.querySelectorAll('.bottom-nav-bar').forEach(bar => {
    const items = bar.querySelectorAll('.nav-bar-item');
    items.forEach(item => item.classList.remove('active'));
    if (tabName === 'add' && items[0]) items[0].classList.add('active');
    else if (tabName === 'moods' && items[1]) items[1].classList.add('active');
    else if (tabName === 'likes' && items[3]) items[3].classList.add('active');
    else if (tabName === 'queue' && items[1]) items[1].classList.add('active');
  });

  // If on mobile screen, scroll right card into view
  if (window.innerWidth <= 820) {
    const rightCard = document.querySelector('.playlist-screen');
    if (rightCard) rightCard.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToNowPlaying() {
  const leftCard = document.querySelector('.player-screen');
  if (leftCard) leftCard.scrollIntoView({ behavior: 'smooth' });
}

function toggleWhisperDrawer() {
  switchTab('chat');
}

function toggleVideoVisibility() {
  videoOverlay.classList.toggle('minimized');
}

// --- Search & Song Addition ---
function handleInputEnter(e) {
  if (e.key === 'Enter') {
    lookupAndPreviewSong();
  }
}

const searchResultsList = document.getElementById('searchResultsList');

async function lookupAndPreviewSong() {
  const query = songInput.value.trim();
  if (!query) {
    showToast('Please enter a song name or paste a link');
    return;
  }

  saveSearchQuery(query);
  showToast('🔍 Searching song...');
  try {
    const res = await fetch(`/api/search-songs?q=${encodeURIComponent(query)}`);
    const results = await res.json();

    if (!results || results.length === 0) {
      showToast('No songs found. Try a different title or paste a YouTube URL.');
      return;
    }

    if (results.length === 1) {
      // Single track (e.g. from direct URL)
      searchResultsList.classList.add('hidden');
      previewSongData = results[0];
      previewTitle.innerText = results[0].title;
      previewArtist.innerText = results[0].artist;
      previewThumbnail.src = results[0].thumbnail;
      songPreviewBox.classList.remove('hidden');
      showToast('Found track! Play now or add to queue.');
    } else {
      // Multiple search results
      songPreviewBox.classList.add('hidden');
      renderSearchResults(results);
      searchResultsList.classList.remove('hidden');
      showToast(`Found ${results.length} tracks! Choose one below.`);
    }
  } catch (err) {
    console.error(err);
    showToast('Failed to search songs. Please check your internet connection.');
  }
}

function renderSearchResults(results) {
  searchResultsList.innerHTML = results.map((song, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const isLiked = likedSongs.some(s => s.id === song.id);
    return `
      <div class="track-row" onclick="playSearchResult('${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')">
        <span class="track-num">${num}</span>
        <img src="${song.thumbnail}" class="track-thumb" alt="${escapeHtml(song.title)}" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/BddP6PYo2gs/mqdefault.jpg'">
        <div class="track-meta">
          <h5 class="track-title">${escapeHtml(song.title)}</h5>
          <span class="track-artist">${escapeHtml(song.artist)}</span>
        </div>
        <button class="track-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')" title="Like Song">
          <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <button class="track-play-btn" onclick="queueSearchResultFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')" title="Add to Queue">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function playSearchResult(id, titleEncoded, artistEncoded, thumbnail) {
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('change_song', { song });
  searchResultsList.classList.add('hidden');
  songInput.value = '';
}

function queueSearchResult(id, titleEncoded, artistEncoded, thumbnail) {
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('add_to_queue', { song });
  searchResultsList.classList.add('hidden');
  songInput.value = '';
  showToast('Added to your shared queue! ❤️');
}

function queueSearchResultFromList(e, id, titleEncoded, artistEncoded, thumbnail) {
  e.stopPropagation();
  queueSearchResult(id, titleEncoded, artistEncoded, thumbnail);
}

function playSelectedSong() {
  if (!previewSongData) return;
  socket.emit('change_song', { song: previewSongData });
  songPreviewBox.classList.add('hidden');
  songInput.value = '';
}

function addSelectedToQueue() {
  if (!previewSongData) return;
  socket.emit('add_to_queue', { song: previewSongData });
  songPreviewBox.classList.add('hidden');
  songInput.value = '';
  showToast('Added to your shared queue! ❤️');
}

// --- Quick Picks & Curated Moods ---
function renderQuickPicks() {
  quickPicksList.innerHTML = CURATED_PICKS.map((song, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const isLiked = likedSongs.some(s => s.id === song.id);
    return `
      <div class="track-row" onclick="playCuratedSong('${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')">
        <span class="track-num">${num}</span>
        <img src="${song.thumbnail}" class="track-thumb" alt="${escapeHtml(song.title)}" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/BddP6PYo2gs/mqdefault.jpg'">
        <div class="track-meta">
          <h5 class="track-title">${escapeHtml(song.title)}</h5>
          <span class="track-artist">${escapeHtml(song.artist)}</span>
        </div>
        <button class="track-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')" title="Like Song">
          <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <button class="track-play-btn" onclick="queueCuratedSongFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${song.thumbnail}')" title="Add to Queue">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function playCuratedSong(id, titleEncoded, artistEncoded, thumbnail) {
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('change_song', { song });
}

function queueCuratedSong(id, titleEncoded, artistEncoded, thumbnail) {
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('add_to_queue', { song });
  showToast(`+ Added to queue: ${song.title}`);
}

function queueCuratedSongFromList(e, id, titleEncoded, artistEncoded, thumbnail) {
  e.stopPropagation();
  queueCuratedSong(id, titleEncoded, artistEncoded, thumbnail);
}

function toggleLikeFromList(e, id, titleEncoded, artistEncoded, thumbnail) {
  e.stopPropagation();
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('toggle_like', { song });
}

function renderMoods() {
  moodGrid.innerHTML = MOOD_FOLDERS.map(folder => `
    <div class="mood-card ${folder.id}" onclick="openFolderDetail('${folder.id}')">
      <div class="mood-card-title">${folder.title}</div>
      <div class="mood-card-desc">${folder.desc}</div>
      <div style="margin-top: 8px; font-size: 0.72rem; color: #fff; font-weight: 600; opacity: 0.9;">
        📂 ${folder.songs.length} Tracks • Click to Open
      </div>
    </div>
  `).join('');
}

function openFolderDetail(folderId) {
  const folder = MOOD_FOLDERS.find(f => f.id === folderId);
  if (!folder) return;
  currentOpenedFolder = folder;
  openedFolderTitle.innerText = folder.title;
  moodsGridView.classList.add('hidden');
  folderDetailView.classList.remove('hidden');

  folderSongsList.innerHTML = folder.songs.map((song, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const isLiked = likedSongs.some(s => s.id === song.id);
    const thumb = `https://img.youtube.com/vi/${song.id}/hqdefault.jpg`;
    return `
      <div class="track-row" onclick="playCuratedSong('${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${thumb}')">
        <span class="track-num">${num}</span>
        <img src="${thumb}" class="track-thumb" alt="Cover" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/BddP6PYo2gs/mqdefault.jpg'">
        <div class="track-meta">
          <h5 class="track-title">${escapeHtml(song.title)}</h5>
          <span class="track-artist">${escapeHtml(song.artist)}</span>
        </div>
        <button class="track-like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${thumb}')" title="Like Song">
          <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <button class="track-play-btn" onclick="queueCuratedSongFromList(event, '${song.id}', '${encodeURIComponent(song.title)}', '${encodeURIComponent(song.artist)}', '${thumb}')" title="Add to Queue">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function closeFolderDetail() {
  currentOpenedFolder = null;
  folderDetailView.classList.add('hidden');
  moodsGridView.classList.remove('hidden');
}

function playCurrentFolderAll() {
  if (!currentOpenedFolder || !currentOpenedFolder.songs.length) return;
  const firstSong = currentOpenedFolder.songs[0];
  playCuratedSong(firstSong.id, encodeURIComponent(firstSong.title), encodeURIComponent(firstSong.artist), `https://img.youtube.com/vi/${firstSong.id}/hqdefault.jpg`);
  
  for (let i = 1; i < currentOpenedFolder.songs.length; i++) {
    const s = currentOpenedFolder.songs[i];
    socket.emit('add_to_queue', {
      song: {
        id: s.id,
        title: s.title,
        artist: s.artist,
        thumbnail: `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`,
        duration: 240
      }
    });
  }
  showToast(`Playing ${currentOpenedFolder.title} (${currentOpenedFolder.songs.length} tracks queued) 🎶`);
}

// --- Liked Songs (Shared Folder System) ---
function toggleCurrentSongLike() {
  if (!currentSong) {
    showToast('No song is currently playing');
    return;
  }
  socket.emit('toggle_like', { song: currentSong });
}

function updateLikeButtonState() {
  if (!currentSong || !likeSongBtn) return;
  const isLiked = likedSongs.some(s => s.id === currentSong.id);
  if (isLiked) {
    likeSongBtn.classList.add('liked');
    likeIconOutline.classList.add('hidden');
    likeIconFilled.classList.remove('hidden');
    likeSongBtn.title = 'Saved in Our Liked Songs ❤️';
  } else {
    likeSongBtn.classList.remove('liked');
    likeIconOutline.classList.remove('hidden');
    likeIconFilled.classList.add('hidden');
    likeSongBtn.title = 'Save to Our Liked Songs ❤️';
  }
}

function renderLikedSongs() {
  if (likesCount) likesCount.innerText = likedSongs.length;
  if (!likedSongs || likedSongs.length === 0) {
    likesList.innerHTML = '';
    emptyLikesMsg.classList.remove('hidden');
    return;
  }

  emptyLikesMsg.classList.add('hidden');
  likesList.innerHTML = likedSongs.map((s, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const thumb = s.thumbnail || `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`;
    return `
      <div class="track-row" onclick="playCuratedSong('${s.id}', '${encodeURIComponent(s.title)}', '${encodeURIComponent(s.artist)}', '${thumb}')">
        <span class="track-num">${num}</span>
        <img src="${thumb}" class="track-thumb" alt="Thumb" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/BddP6PYo2gs/mqdefault.jpg'">
        <div class="track-meta">
          <h5 class="track-title">${escapeHtml(s.title)}</h5>
          <span class="track-artist">${escapeHtml(s.artist)} • Saved by ${escapeHtml(s.likedBy || 'Partner')} ❤️</span>
        </div>
        <button class="track-like-btn liked" onclick="unlikeSongById(event, '${s.id}')" title="Remove from Liked">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <button class="track-play-btn" onclick="queueCuratedSongFromList(event, '${s.id}', '${encodeURIComponent(s.title)}', '${encodeURIComponent(s.artist)}', '${thumb}')" title="Add to Queue">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function unlikeSongById(e, id) {
  if (e && e.stopPropagation) e.stopPropagation();
  const song = likedSongs.find(s => s.id === id);
  if (song) {
    socket.emit('toggle_like', { song });
  }
}

function playAllLikedSongs() {
  if (!likedSongs.length) {
    showToast('No liked songs to play yet!');
    return;
  }
  const first = likedSongs[0];
  playCuratedSong(first.id, encodeURIComponent(first.title), encodeURIComponent(first.artist), first.thumbnail);
  for (let i = 1; i < likedSongs.length; i++) {
    const s = likedSongs[i];
    socket.emit('add_to_queue', { song: s });
  }
  showToast(`Playing all ${likedSongs.length} Liked Songs! ❤️`);
}

// --- Search History System ---
function saveSearchQuery(query) {
  if (!query) return;
  const q = query.trim();
  if (!q) return;
  searchHistory = searchHistory.filter(item => item.toLowerCase() !== q.toLowerCase());
  searchHistory.unshift(q);
  if (searchHistory.length > 8) searchHistory.pop();
  localStorage.setItem('tb_search_history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

function renderSearchHistory() {
  if (!searchHistoryWrapper || !historyChips) return;
  if (!searchHistory || searchHistory.length === 0) {
    searchHistoryWrapper.classList.add('hidden');
    return;
  }
  searchHistoryWrapper.classList.remove('hidden');
  historyChips.innerHTML = searchHistory.map(q => `
    <span class="history-chip" onclick="searchFromHistory('${encodeURIComponent(q)}')">
      ${escapeHtml(q)}
      <span class="chip-remove" onclick="removeHistoryItem(event, '${encodeURIComponent(q)}')">✕</span>
    </span>
  `).join('');
}

function searchFromHistory(qEncoded) {
  const q = decodeURIComponent(qEncoded);
  songInput.value = q;
  lookupAndPreviewSong();
}

function removeHistoryItem(e, qEncoded) {
  e.stopPropagation();
  const q = decodeURIComponent(qEncoded);
  searchHistory = searchHistory.filter(item => item.toLowerCase() !== q.toLowerCase());
  localStorage.setItem('tb_search_history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

function clearSearchHistory() {
  searchHistory = [];
  localStorage.removeItem('tb_search_history');
  renderSearchHistory();
  showToast('Search history cleared');
}

// --- Queue Rendering ---
function renderQueue() {
  if (queueCount) queueCount.innerText = queue.length;
  if (upNextPreviewText) {
    if (queue && queue.length > 0) {
      upNextPreviewText.innerText = `${queue[0].title} - ${queue[0].artist || 'Next'}`;
    } else {
      upNextPreviewText.innerText = 'No songs queued - tap to browse';
    }
  }

  if (!queue || queue.length === 0) {
    queueList.innerHTML = '';
    emptyQueueMsg.classList.remove('hidden');
    return;
  }

  emptyQueueMsg.classList.add('hidden');
  queueList.innerHTML = queue.map((s, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const thumb = s.thumbnail || `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`;
    return `
      <div class="track-row" onclick="playQueueItem('${s.id}', '${encodeURIComponent(s.title)}', '${encodeURIComponent(s.artist)}', '${thumb}')">
        <span class="track-num">${num}</span>
        <img src="${thumb}" class="track-thumb" alt="Thumb" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/BddP6PYo2gs/mqdefault.jpg'">
        <div class="track-meta">
          <h5 class="track-title">${escapeHtml(s.title)}</h5>
          <span class="track-artist">${escapeHtml(s.artist)} • By ${escapeHtml(s.addedBy || 'Partner')}</span>
        </div>
        <button class="track-play-btn" onclick="removeQueueItemFromList(event, '${s.queueId || s.id}')" title="Remove from Queue">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function removeQueueItemFromList(e, queueId) {
  if (e && e.stopPropagation) e.stopPropagation();
  removeFromQueue(queueId);
}

function playQueueItem(id, titleEncoded, artistEncoded, thumbnail) {
  const song = {
    id,
    title: decodeURIComponent(titleEncoded),
    artist: decodeURIComponent(artistEncoded),
    thumbnail,
    duration: 240
  };
  socket.emit('change_song', { song });
}

function removeFromQueue(queueId) {
  socket.emit('remove_from_queue', { queueId });
}

// --- Couple Presence & Users ---
function updateUsersList(users) {
  if (!users) return;
  const otherUsers = users.filter(u => u.id !== socket.id);

  if (otherUsers.length > 0) {
    const partner = otherUsers[0];
    otherNameDisplay.innerText = partner.name;
    otherAvatarDisplay.innerText = partner.avatar || '💖';
    otherStatusDot.classList.remove('offline');
  } else {
    otherNameDisplay.innerText = 'Waiting for partner... 💌';
    otherAvatarDisplay.innerText = '🤍';
    otherStatusDot.classList.add('offline');
  }
}

// --- Profile Customization Modal ---
function openNameModal() {
  inputProfileName.value = myName;
  nameModal.classList.remove('hidden');
}

function selectAvatar(emoji) {
  myAvatar = emoji;
  document.querySelectorAll('.emoji-opt').forEach(el => {
    if (el.innerText === emoji) el.classList.add('selected');
    else el.classList.remove('selected');
  });
}

function saveProfileAndJoin() {
  const entered = inputProfileName.value.trim();
  if (entered) {
    myName = entered;
    localStorage.setItem('tb_name', myName);
    localStorage.setItem('tb_avatar', myAvatar);
    updateProfileUI();
    nameModal.classList.add('hidden');

    if (socket && socket.connected) {
      socket.emit('join_room', {
        roomId,
        name: myName,
        avatar: myAvatar
      });
    }
    showToast(`Profile updated as ${myName} ${myAvatar}`);
  }
}

function updateProfileUI() {
  yourNameDisplay.innerText = myName;
  yourAvatarDisplay.innerText = myAvatar;
}

// --- Romantic Features: Floating Hearts Burst ---
function triggerLoveBurst() {
  spawnFloatingHearts(16, myAvatar || '❤️');
  if (socket && socket.connected) {
    socket.emit('send_heart', { type: myAvatar || '❤️' });
  }
  showToast('Sent love hearts to your partner! 💖');
}

function spawnFloatingHearts(count = 12, emoji = '❤️') {
  const hearts = [emoji, '💖', '✨', '💕', '🥰', '🌹'];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Random position across bottom
    const left = Math.floor(Math.random() * 85) + 8;
    const delay = Math.random() * 0.5;
    const size = Math.floor(Math.random() * 18) + 20;

    heart.style.left = `${left}%`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.fontSize = `${size}px`;

    heartCanvasContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2800);
  }
}

// --- Whisper Live Chat ---
function handleChatEnter(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  socket.emit('send_message', { message: msg });
  chatInput.value = '';
}

function appendChatMessage(data) {
  const isMine = data.senderId === socket.id;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${isMine ? 'mine' : 'theirs'}`;
  bubble.innerHTML = `
    <span class="bubble-sender">${isMine ? 'You' : data.from}</span>
    <span>${escapeHtml(data.message)}</span>
  `;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

// --- Toast System ---
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
