<template>
  <div id="menu">
    <nav class="navbar navbar-light bg-light">
        <h3>Subreddit Searcher</h3>
      <div class="d-block"><a class="navbar-brand" href="#">/r/{{subreddit}}</a></div>
      <div class="input-group mb-3">
        <input v-model="subreddit" type="text" class="form-control" placeholder="Enter Subreddit..." aria-label="Enter Subreddit..." aria-describedby="basic-addon2">
        </div>
    </nav>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
export default {

  components: {Posts},  
  name: 'Menu',
  data() {
      return {
          subreddit: 'all'
      }
  },
  watch: {
      subreddit() {
          this.$emit('subChange', this.subreddit)
      }
  }
};
</script>

<style>
</style>
