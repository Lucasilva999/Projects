<template>
  <div id="componentContainer">
    <Menu @subChange="sub = $event"/>
    <Posts :sub="sub"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Posts from '@/components/Posts.vue'
export default {
  components: {Menu, Posts},
  name: 'ComponentContainer',
  data() {
    return {
      sub: ''
    }
  }
};
</script>

<style>
</style>
