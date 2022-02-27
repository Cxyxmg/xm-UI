<template>
  <div>
    <Button @click="toggle">toggle</Button>
     <Dialog v-model:visible='x' :closeOnClickOverlay="false" :ok='f1'
     :cancel='f2'
     >
     <template v-slot:title>
       我的标题
      </template>
      <template v-slot:content>
       我的内容
      </template>
     </Dialog>
     <hr>
     <p>实例2</p>
        <Button @click="showDialog">show</Button>
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import { ref } from 'vue'
export default {
  components:{
    Dialog,Button
  },
  setup(){
    const x =ref(false)
    const toggle =()=>{
      x.value = !x.value
    }
    const f1=()=>{console.log(1); return false}
    const f2=()=>{console.log(2);}
    const showDialog=()=>{
      openDialog({title:"标题",content:"你好",ok(){
        console.log('ok');
        return false
      },
      cancel(){
        console.log('cancel');
      }
      })
    }
    return {x,toggle,f1,f2,showDialog}
  }
}
</script>

<style>

</style>