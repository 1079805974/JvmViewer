<template>
<h2>
  MethodName:{{name}}
  <op-stack :owner="owner"/>
  <local-vars-table :owner="owner"/>
</h2>
</template>

<script>
  import OpStack from "./OpStack";
  import LocalVarsTable from "./LocalVarsTable";
  export default {
    name: 'VmFrame',
    components: {LocalVarsTable, OpStack},
    props: {
      name: {
        type: String,
        default: 'null'
      },
      owner: {
        type: String,
        default: 'null'
      }
    }
  }
</script>
