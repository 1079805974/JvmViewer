<template>
  <div>
    <h1>{{name}}:VmStack</h1>
    <vm-frame v-for="(item,index) of frames" :key="index"
              style="background: blanchedalmond"
              :owner="name" :name="item"/>
  </div>
</template>

<script>
  import bus from '../bus.js'
  import VmFrame from "./VMFrame";

  export default {
    name: 'VmStack',
    components: {VmFrame},
    props:{
      name: {
        type: String,
        default: 'Thread0'
      }
    },
    data() {
      return {
        frames: []
      }
    },
    methods: {
      push(name) {
        this.frames.push(name)
      },
      pop() {
        this.frames.pop()
      }
    },
    mounted() {
      bus.$on(this.name + '.push', this.push)
      bus.$on(this.name + '.pop', this.pop)
    }
  }
</script>
