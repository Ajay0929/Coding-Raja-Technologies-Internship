// script.js
const tracks = [
    {
        title: 'Song One',
        artist: 'Artist One',
        src: 'track1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Song Two',
        artist: 'Artist Two',
        src: 'track2.mp3',
        cover: 'cover2.jpg'
    }
    // Add more tracks as needed
];

let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const trackListElement = document.getElementById('track-list');
const albumCoverElement = document.getElementById('album-cover');
const trackTitleElement = document.getElementById('track-title');
const trackArtistElement = document.getElementById('track-artist');
const playPauseButton = document.getElementById('play-pause-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');
const progressBar = document.getElementById('progress-bar');
const shuffleButton = document.getElementById('shuffle-btn');
const repeatButton = document.getElementById('repeat-btn');

const audio = new Audio();
audio.src = tracks[currentTrackIndex].src;

function loadTrack(index) {
    const track = tracks[index];
    albumCoverElement.src = track.cover;
    trackTitleElement.textContent = track.title;
    trackArtistElement.textContent = track.artist;
    audio.src = track.src;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = 'Play';
    } else {
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function playNextTrack() {
    if (isShuffle) {
        currentTrackIndex = Math.floor(Math.random() * tracks.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    loadTrack(currentTrackIndex);
    audio.play();
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatButton.classList.toggle('active', isRepeat);
}

audio.addEventListener('ended', () => {
    if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
    } else {
        playNextTrack();
    }
});

audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);
playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPrevTrack);
nextButton.addEventListener('click', playNextTrack);
volumeControl.addEventListener('input', (e) => audio.volume = e.target.value);
shuffleButton.addEventListener('click', toggleShuffle);
repeatButton.addEventListener('click', toggleRepeat);

tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = ${track.title} - ${track.artist};
    li.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(index);
        audio.play();
    });
    trackListElement.appendChild(li);
});

loadTrack(currentTrackIndex);