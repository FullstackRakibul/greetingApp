

<template>
   <iframe
      class="youtube-background"
      :src="youtubeEmbedUrl"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
    ></iframe>
  <RouterView />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
//import BirthdayCard from './components/BirthdayCard.vue';

// Props
const recipient_name = ref('Hinu');

// State
const isPlaying = ref(true);

// YouTube Embed URL (Replace VIDEO_ID with the YouTube video ID of the song)
const youtubeBaseUrl = 'https://www.youtube.com/embed/';
const videoId = 'VIDEO_ID'; // Replace with your YouTube video ID

// Embed URL with autoplay settings
const youtubeEmbedUrl = computed(() =>
  `https://youtu.be/uNR4B4njvQA?si=OShHxCNNCBajVShW&t=28`
);

// Toggle music
const toggleMusic = () => {
  isPlaying.value = !isPlaying.value;
};
</script>