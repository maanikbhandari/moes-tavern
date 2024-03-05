<!-- ResultDisplay.vue -->
<template>
  <div class="{['index' + index]: true}">
    <p>{{ selectedImageAlt || 'No selection' }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useImageStore } from '@/pinia.js';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const imageStore = useImageStore();
    const selectedImageAlt = ref(imageStore.selectedImageAlt);

    watch(
      () => imageStore.selectedImageAlt,
      (newAlt) => {
        selectedImageAlt.value = newAlt;
      }
    );

    return {
      selectedImageAlt,
    };
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>
