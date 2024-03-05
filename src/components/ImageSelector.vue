<template>
  <div class="image-selector">
    <div v-for="image in images" :key="image.id" @click="selectImage(image)">
      <div class="image-container" :class="{ 'selected': selectedImage === image.id, 'shrink': selectedImage && selectedImage !== image.id,
       ['index' + index]: true }">
        <img :src="require(`@/assets/${image.filename}`)" :alt="image.alt" :style="getImageStyle(image.id, selectedImage)">
        <div v-if="selectedImage === image.id" class="overlay"></div>
      </div>
      <p :class="{ 'caption': true, 'selected-caption': selectedImage === image.id }">{{ image.alt }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import { useImageStore } from '@/pinia.js';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const selectedImage = ref(null);
    const imageStore = useImageStore();

    const selectImage = (image) => {
      if (selectedImage.value === image.id) {
        selectedImage.value = null; // Unselect the image if already selected
        imageStore.setSelectedImageAlt(null); // Set null in the store for unselected image
      } else {
        selectedImage.value = image.id;
        const altText = image.alt;
 
        imageStore.setSelectedImageAlt(altText); // Set the selected image alt in the store
      }
    };

    const getImageStyle = (imageId, selectedImage) => {
      const isSelected = selectedImage === imageId;
      const scale = isSelected ? 1.2 : 1 / 1.2;
      const filter = selectedImage && !isSelected ? 'grayscale(100%)' : 'grayscale(0%)';

      return {
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease, border 0.3s ease',
        border: isSelected ? '2px solid #fff' : '2px solid #fff',
        filter: filter,
      };
    };

    return {
      selectedImage,
      selectImage,
      getImageStyle,
    };
  },
};
</script>

<style scoped>
.image-selector {
  display: flex;
  justify-content: center;
}

.image-container {
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border 0.3s ease;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shrink {
  transform: scale(0.7) !important;
}

.caption {
  text-align: center;
}

.selected-caption {
  font-weight: bold;
}
</style>
