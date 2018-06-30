<template>
  <div>
    <h1>MethodArea</h1>
    <div v-for="(item,index) of classes" :key="index">{{item}}</div>
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    name: 'MethodArea',
    data(){
      return{
        classes:[]
      }
    },
    methods: {
      add(name){
        this.classes.push(name)
      },
      remove(name){
        this.classes.remove(name)
      }
    },
    mounted(){
      bus.$on('methodArea.add', this.add)
      bus.$on('methodArea.remove', this.remove)
    }
  }
</script>
