<template>
  <div>
    <h1>Heap</h1>
    <div v-for="(item,index) of objects" :key="index">{{item}}</div>
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    name: 'Heap',
    data(){
      return{
        objects:[]
      }
    },
    methods: {
      add(name){
        this.objects.push(name)
      },
      remove(name){
        this.objects.remove(name)
      }
    },
    mounted(){
      bus.$on('heap.add', this.add)
      bus.$on('heap.remove', this.remove)
    }
  }
</script>
