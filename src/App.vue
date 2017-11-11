<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <app-nav></app-nav>
    <router-view></router-view>
    <!-- <gallery-slide></gallery-slide> -->
  </div>
</template>

<script>
import navigation from './components/navigation'
export default {
  name: 'app',
  components: {
    appNav: navigation
    // gallerySlide: gallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
