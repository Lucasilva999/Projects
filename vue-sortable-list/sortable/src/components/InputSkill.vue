<template>
    <div class="skill-input">
        <div class="input-group mb-3">
      <input v-model="newInput" @keydown.enter="addNewItem"
      type="text" class="form-control"
       placeholder="Enter skill here..." aria-label="Recipient's username" 
       aria-describedby="basic-addon2">
        <div class="input-group-append">
        <button @click="addNewItem" 
         class="btn btn-outline-primary mb-3" type="button">Button</button>
        </div>
      </div>
    </div>
    
</template>

<script>
import eventbus from '@/eventbus'

export default {
  name: 'InputSkill',
  data() {
    return {
      newInput: ''
    }
  },
  methods: {
    addNewItem() {
      eventbus.$emit('addNewItem', this.newInput)
      this.newInput = ''
    }
  },
}
</script>

<style>

</style>
