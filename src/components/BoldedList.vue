<template>
    <div>
      <h1>Selected teams</h1>
      <div v-if="selectedWords.length > 0">
        <p v-for="(word, index) in selectedWords" :key="index">
          {{ word }}
          <br v-if="index < selectedWords.length - 1" />
        </p>
      </div>
      <div v-if="selectedWords.length < 8 && selectedWords.length != 0">
      <p>You have not selected 8 teams.</p></div>
      <p v-if="selectedWords.length == 0">No teams selected. Select some teams.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedWords: [],
      };
    },
    mounted() {
      document.addEventListener('click', this.updateSelectedWords);
    },
    beforeUnmount() {
      document.removeEventListener('click', this.updateSelectedWords);
    },
    methods: {
      updateSelectedWords() {
        const selectedCaptionElements = document.querySelectorAll('.selected-caption');
        this.selectedWords = Array.from(selectedCaptionElements).map((element) => element.innerText);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here if needed */
  </style>
  