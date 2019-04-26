<template>
  <div class="hello mt-3">
    <ul class="list-unstyled">
      <li v-for="post in posts" class="media m-3">
        <img class="mr-3" :src="post.data.thumbnail" :alt="post.data.title" onerror="this.src='https://cdn-images-1.medium.com/max/1600/0*Y-lwTxONHyTr0EmH.jpg'">
        <div class="media-body">
          <h5 class="mt-0 mb-1"><a :href="createUrl(post.data.permalink)" target="_blank">{{post.data.title}}</a></h5>
          <p>
            <h3 class="text-danger">{{post.data.ups}} upvotes</h3>
            <p>created {{formatDate(post.data.created_utc)}} ago by {{post.data.author}}</p>
            <button
              v-if="isImage(post)"
              @click="post.showImage = !post.showImage"
              type="button"
              class="badge badge-pill btn-primary mr-1">
              {{post.showImage ? 'Hide' : 'Show'}} Image
            </button>
            <span class="badge badge-pill badge-secondary">{{post.data.num_comments}} comments</span>
            <div v-if="post.showImage" class="imgContainer my-3 bg-white">
              <img :src="post.data.url" alt="" class="img rounded "/>
            </div>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {parse, distanceInWords} from 'date-fns';

export default {
  props: ['sub'],
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.initialLoad();
  },
  methods: {
    initialLoad() {
      const url = 'https://www.reddit.com/r/all/.json';
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          result.data.children.forEach(child => {
            child.showImage = false;
          });
          this.posts = result.data.children;
        });
    },
    load() {
      const url = `https://www.reddit.com/r/${this.sub}/.json`;
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          result.data.children.forEach(child => {
            child.showImage = false;
          });
          this.posts = result.data.children;
        });
    },
    formatDate(date) {
      return distanceInWords(parse(date * 1000), new Date());
    },
    createUrl(path) {
      return `https://www.reddit.com${path}`
    },
    isImage(post) {
      return post.data.url.match(/\.(jpg|png|jpeg|bpm)$/);
    },
  },
  watch: {
    sub() {
      this.load()
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vh;
  height: 60vh;
  padding: 15px;
  border-radius: 6px;
}

.img {
  max-width:100%;
  max-height:100%;
}
</style>
