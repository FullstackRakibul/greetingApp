<script setup lang="ts">
import { ref, computed } from 'vue';
//import BirthdayCard from './components/BirthdayCard.vue';

// Props
const recipient_name = ref('Hinu');

// State
const isPlaying = ref(true);

// YouTube Embed URL for your video
const youtubeBaseUrl = 'https://www.youtube.com/embed/';
const videoId = 'uNR4B4njvQA'; // Your YouTube video ID
const startTime = 26; // Start at 26 seconds

// Embed URL with autoplay and start time
const youtubeEmbedUrl = computed(() =>
  `${youtubeBaseUrl}${videoId}?autoplay=1&start=${startTime}&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&mute=${isPlaying.value ? '0' : '1'}`
);

// Toggle music
const toggleMusic = () => {
  isPlaying.value = !isPlaying.value;
};
</script>

<template>
  <div class="app">
    <iframe
      class="youtube-background"
      :src="youtubeEmbedUrl"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
    ></iframe>
    <div class="content">
      <h1>🎉 Happy Birthday, {{ recipient_name }}! 🎂</h1>
      <BirthdayCard
        recipient_name="Hinu"
        :colors="{ bg: '#ffe4e1', text: '#d2691e', card: '#ffdead' }"
      />
      <button @click="toggleMusic" class="music-btn">
        {{ isPlaying ? 'Pause Music' : 'Play Music' }}
      </button>
    </div>
  </div>
</template>

<style>
/* App styles */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(120deg, #ff9a9e, #fad0c4);
  overflow: hidden;
}

/* YouTube iframe styling */
.youtube-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none; /* Make it non-interactive */
}

/* Content styling */
.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}

.music-btn {
  margin-top: 20px;
  background-color: #ff7f50;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.music-btn:hover {
  background-color: #ff4500;
}
</style>
