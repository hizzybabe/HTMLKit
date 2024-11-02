import { writable } from 'svelte/store';

export const courseContent = writable({
  chapter1: {
    // Chapter 1 content
  },
  chapter2: {
    // Chapter 2 content
  },
  // ... remaining chapters
});
