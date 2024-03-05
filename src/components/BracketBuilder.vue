<template>
    <div>
      <ImageSelector :images="east ? imageArray1 : imageArray5" :index="0" />
      <ImageSelector :images="east ? imageArray2 : imageArray6" :index="1" />
      <ImageSelector :images="east ? imageArray3 : imageArray7" :index="2" />
      <ImageSelector :images="east ? imageArray4 : imageArray8" :index="3" />
    </div>
  </template>
  
  <script>
  import ImageSelector from './ImageSelector.vue';
  
  export default {
    name: 'BracketBuilder',
    components: {
      ImageSelector,
    },

    props: {
    east: {
      type: Boolean,
      default: true,
    },
  },

    data() {
      return {
        imageArray1: [
          { id: 'image1', filename: 'cgy.svg', alt: 'calgary', metadata: { /* Calgary Flames */ } },
          { id: 'image2', filename: 'van.svg', alt: 'vancouver', metadata: { /* Vancouver Canucks */ } },
        ],
        imageArray2: [
        { id: 'image1', filename: 'mtl.svg', alt: 'montreal', metadata: { /* Montreal Canadiens */ } },
          { id: 'image2', filename: 'tor.svg', alt: 'toronto', metadata: { /* Toronto Maple Leafs */ } },
        ],
        imageArray3: [
        { id: 'image1', filename: 'wpg.svg', alt: 'winnipeg', metadata: { /* Winnipeg Jets */ } },
          { id: 'image2', filename: 'ott.svg', alt: 'ottawa', metadata: { /* Ottawa Senators */ } },
        ],
        imageArray4: [
        { id: 'image1', filename: 'edm.svg', alt: 'edmonton', metadata: { /* Edmonton Oilers */ } },
          { id: 'image2', filename: 'sjs.svg', alt: 'san jose', metadata: { /* San Jose Sharks */ } },
        ],
        imageArray5: [
          { id: 'image1', filename: 'car.svg', alt: 'carolina', metadata: { /* Carolina Hurricanes */ } },
          { id: 'image2', filename: 'nyr.svg', alt: 'new york rangers', metadata: { /* New York Rangers */ } },
        ],
        imageArray6: [
        { id: 'image1', filename: 'col.svg', alt: 'colorado', metadata: { /* Colorado Avalanche */ } },
          { id: 'image2', filename: 'ari.svg', alt: 'arizona', metadata: { /* Arizona Coyotes */ } },
        ],
        imageArray7: [
        { id: 'image1', filename: 'wsh.svg', alt: 'washington', metadata: { /* Washington Capitals */ } },
          { id: 'image2', filename: 'pit.svg', alt: 'pittsburgh', metadata: { /* Pittsburgh Penguins */ } },
        ],
        imageArray8: [
        { id: 'image1', filename: 'sea.svg', alt: 'seattle', metadata: { /* Seattle Kraken */ } },
          { id: 'image2', filename: 'nsh.svg', alt: 'nashville', metadata: { /* Nashville Predators */ } },
        ],
      };
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  