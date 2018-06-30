<template>
  <div>
    <h5>{{owner}}:Local Vars Table</h5>
    <div v-for="(item,index) in variables" :key="index">
      <variable :index="index" :value="item"/>
    </div>
  </div>
</template>
<script>
  import bus from '../bus.js'
  import Variable from "./Variable";
  export default {
    name: 'LocalVarsTable',
    components: {Variable},
    props: {
      depth:{
        type: Number,
        default: 0
      },
      owner:{
        type: String,
        default: 'Thread0'
      }
    },
    data(){
      return{
        variables:[]
      }
    },
    methods:{
      set(index, val){
        this.$set(this.variables, index, val)
      },
      load(index){
        this.$set(this.variables, index, null)
      }
    },
    mounted(){
      bus.$on(this.owner+'.localVarsTable.set',this.set)
      bus.$on(this.owner+'.localVarsTable.fetch',this.load)
      bus.$on(this.owner+'.localVarsTable.load',this.load)
    }
  }
</script>
