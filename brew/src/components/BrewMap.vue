<template>
    <div class="row map">
       <!-- <h2>Center is {{currentCenter}} and zoom is {{currentZoom}}</h2> -->
      <l-map 
        @update:zoom="zoomUpdate"
        @update:center="centerUpdate"
        :zoom="zoom" 
        :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker 
        v-bind:key="index"
        v-for="(brew, index) in brews" 
        :lat-lng="latLng(brew.latitude, brew.longitude)">
            <l-icon
            v-bind:icon-size="brew.iconSize"
             v-bind:icon-url="icon"
             ></l-icon>
      
      </l-marker>

      
      </l-map>
    </div>
    <!-- /.row map -->
</template>


<script>
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import beer from '../assets/beer.png'

export default {
    name: "BrewMap",
    props: {
        brews: Array
    },
    data: function() {
        return {
            zoom:7,
            currentZoom: 7,
            center: L.latLng(33.146472, -111.950684),
            currentCenter: L.latLng(33.146472, -111.950684),
             url:'https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=249e9cc3c399485ea7e72762c29e7966',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
             marker: L.latLng(47.413220, -1.219482),
             icon: beer,
             iconSize: [30, 30]
        }
    },
    components: {
        
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    },

    methods: {
        latLng: function(lat, lng) {
            return L.latLng(lat, lng)
        },
        centerUpdate: function(center) {
            this.currentCenter = center
        },
        zoomUpdate: function(zoom) {
            this.currentZoom = zoom
        }
        
    }
}

</script>

<style lang="scss" scoped>

    .map {
        height: 70vh;
    }
</style>
