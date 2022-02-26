<template>
  <div>
    <div>我的第一个switch</div>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from "../lib/Switch.vue"
export default {
  components:{
    Switch
  },
  setup(){
    const bool = ref(true)
    return {bool}
  }
}
</script>

<style>

</style>