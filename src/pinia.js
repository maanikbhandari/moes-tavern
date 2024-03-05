// store.js
import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    selectedImageAlt: null,
    selectedImageClass: null, // New state to store the selected image class
  }),
  actions: {
    setSelectedImageAlt(alt) {
      this.selectedImageAlt = alt;
    },
    setSelectedImageClass(className) {
      this.selectedImageClass = className;
    },
    getSelectedImageClass() {
      return this.selectedImageClass;
    },
  },
});
