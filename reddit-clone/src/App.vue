<template>
  <div id="app">
    <ComponentContainer/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Posts from '@/components/Posts.vue'
import ComponentContainer from '@/components/ComponentContainer.vue'
export default {
  components: {Menu, Posts, ComponentContainer},
  name: 'App',
};
</script>

<style>
</style>
