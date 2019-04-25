<template>
<div class="card brew-list px-0 mx-0">
          <ul class="list-group"> 
             <li
             @mouseover="mouseOver(index)"
             @mouseleave="mouseLeave(index)"
              v-bind:key="index"
              v-for="(brew, index) in brews" 
              class="list-group-item">
                 <strong>{{brew.name}} - {{brew.city}}</strong>
             </li>
          </ul>
     </div>
</template>

<script>
export default {
    name:'BrewList',
    props: {
      brews: Array
    },
    methods: {
      mouseOver: function(index){
        this.$emit('mouse-over-brew', index)
      },
      mouseLeave: function(index){
        this.$emit('mouse-left-brew', index)
      }
    }
}
</script>

<style lang="scss" scoped>
    .brew-list {
    overflow-y: scroll;
    height: 70vh;
    cursor: url('../assets/beer-cursor.png'), auto;
    li {
      &:hover {
        background-color: rgb(224, 211, 175);
        
      }
    }
  }
</style>


