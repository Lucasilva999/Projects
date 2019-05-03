<template>
  <div id="app">
    <SortableList/>
  </div>
</template>

<script>
import SortableList from './components/SortableList.vue'

export default {
  name: 'app',
  components: {
    SortableList
  }
}
</script>

<style lang="scss">
body {
  background: rgb(231, 231, 231)
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 4em;
}
</style>
