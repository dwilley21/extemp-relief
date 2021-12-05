<template>
  <div id="app">
    <Main />
    <About />
    <Shop />
    <Testimonals />
    <FAQ />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import About from './components/About.vue'
import Shop from './components/Shop.vue'
import Testimonals from './components/Testimonals.vue'
import FAQ from './components/FAQ.vue'


export default {
  name: 'App',
  components: {
    Main,
    About, 
    Shop,
    Testimonals,
    FAQ

  }
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
