<template>
  <div id="principal" class="container-fluid">
    <Brew/>
  </div>
</template>

<script>
import Brew from './components/Brew.vue'

export default {
  name: 'app',
  components: {
    Brew
  }
}
</script>

<style>
 body {
   background: url('./assets/bg1.jpg')
 }

 h1 {
   font-family: 'Rancho', cursive;
   font-size: 5em;
 }
</style>
