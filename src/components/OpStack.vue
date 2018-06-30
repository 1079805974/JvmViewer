<template>
  <div>
    <h5>{{owner}}:Operand Stack</h5>
    <div v-for="(item,index) in frames" :key="index">{{item}}</div>
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    name: 'OpStack',
    props:{
      owner:{
        type: String,
        default: 'Thread0'
      }
    },
    data(){
      return{
        frames:[]
      }
    },
    methods:{
      push(name){
        this.frames.push(name)
      },
      pop(){
        this.frames.pop()
      }
    },
    mounted(){
      bus.$on(this.owner + '.opStack.push', this.push)
      bus.$on(this.owner + '.opStack.pop', this.pop)
    }
  }
</script>
