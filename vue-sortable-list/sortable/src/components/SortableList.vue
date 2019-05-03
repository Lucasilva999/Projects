<template>
  <div class="sortableList">
    <h1 class="mb-3">Skill Tracker</h1>
   
    <InputSkill/>
    <DraggableList/>
    
  </div>

</template>

<script>

import InputSkill from './InputSkill.vue'
import DraggableList from './DraggableList.vue'

export default {
  name: 'SortableList',
  components: { InputSkill, DraggableList },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
