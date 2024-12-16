import { defineStore } from 'pinia';

export const useBirthdayStore = defineStore('birthday', {
  state: () => ({
    recipient_name: 'Hinu',
    theme: {
      bg: '#ffe4e1',
      text: '#d2691e',
      card: '#ffdead',
    },
  }),
});
