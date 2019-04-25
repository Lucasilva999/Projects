<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mt-4 mb-4"><strong>Arizona Breweries</strong></h1>
      </div>
      <!-- /.col-12 -->
    </div>
    <!-- /.row -->

      <div class="row">
        <div class="col-6">
        
          <!--BrewListComponent-->
          <BrewList 
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          v-bind:brews="brews"
          style="border: 1px solid black;"
          />
          

        </div>
        <!-- /.col-6 -->
        <div class="col-6">
        <!--BrewMapComponent-->
          <BrewMap v-bind:brews="brews" 
          style="border: 1px solid black;"/>
        </div>
        <!-- /.col-6 -->
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import axios from 'axios'
import BrewList from './BrewList.vue'
import BrewMap from './BrewMap.vue'

export default {
  name: 'Brew',
  components: {BrewList, BrewMap},
  data: function() {
    return {
      brews: [],
      defaultIcon: [30, 30],
      largeIcon: [60, 60]
    }
  },
  mounted: function() {
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(result => {
      this.brews = result.data.filter(result => result.state == 'Arizona')
      .map(result => {
          result.iconSize = this.defaultIcon
          return result
      })
      })
  },
  methods: {
    mouseOverBrew: function(index){
      this.brews[index].iconSize = this.largeIcon
      
      
    },
    mouseLeftBrew: function(index){
      this.brews[index].iconSize = this.defaultIcon
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>



h1 {
  color: darkred;
}

 
</style>
