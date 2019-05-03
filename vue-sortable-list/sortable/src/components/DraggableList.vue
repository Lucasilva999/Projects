<template>
    <div class="draggable-list">
        <draggable v-model="myArray" ghost-class="ghost">
        <transition-group type="transition" name="fliplist">
           <div class="sortable" :id="element.id" v-for="element in myArray" 
            :key="element.id">   
            <strong>{{element.name}}</strong>
            <span>{{element.id}}</span>
            </div>
        </transition-group>
        </draggable>
    </div>
</template>

<script>
import eventbus from '@/eventbus'
import Draggable from 'vuedraggable'
export default {
    name: 'DraggableList',
    components: {Draggable},
    data() {
        return {
            id: 0,
             myArray: [],
      oldIndex: '',
      newIndex: ''
    }
  },
  methods: {
    increaseId() {
        this.id++
    }

    },

    created() {
        eventbus.$on('addNewItem', newInput => {
            if(newInput != '') {
                this.increaseId()
                this.myArray.push({
                name: newInput,
                id: this.id
            })
            }
            
        })
    },
}
</script>

<style scoped lang="scss">
   strong {
     display: inline-block;
   }

   .sortable {
     width: 100%;
     background: #fff;
     padding: 1em;
     cursor: move;
     margin-bottom: 2px;

     span {
       float: right;
     }
   }

   .sortableList .sortable-drag {
     opacity: 0;
   }

   .fliplist-move {
     transition: transform 0.5s;
   }

   .ghost {
     border-left: 6px solid rgb(0, 183, 255);
     box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
     opacity: 0.7;
   }

   .indexInfo {
      margin-top: 30px;
   }
</style>
