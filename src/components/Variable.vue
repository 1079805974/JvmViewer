<template>
  <div>
    <h2>
      #{{index+ ": " +value}}
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'Variable',
    props: {
      index: {
        type: Number,
        default: 0
      },
      value:{
        type: String,
        default: "null"
      }
    },
    data() {
      return {}
    }
  }
</script>
