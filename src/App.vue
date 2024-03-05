<template>
  <img class="moe-logo" alt="Moe logo" src="./assets/moe.webp">
  <HelloWorld msg="Moe's Tavern"/>
  <h2>East</h2>
  <BracketBuilder :east="true"/>
  <h2>West</h2>
  <BracketBuilder :east="false"/>
  <BoldedList />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BracketBuilder from './components/BracketBuilder.vue';
import BoldedList from './components/BoldedList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    BracketBuilder,
    BoldedList,
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

.moe-logo {
  max-width:200px;
  max-height: 200px;
}
</style>
