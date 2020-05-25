<template>
<div class="gegeg">
  <personalTop></personalTop>
  <personfunctions></personfunctions>
</div>
</template>

<script>
import personalTop from "./personalChildrens/personalTop.vue"
import personfunctions from "./personalChildrens/personfunctions.vue"
export default {
    name:'Profile',
    components:{
      "personalTop":personalTop,
      "personfunctions":personfunctions,
    },
    created(){
      this.axios.get('api/check').then((response)=>{
        console.log(response.data);
        if(response.data.code==0){
          this.$router.push('/login')
        }else {
          console.log('验证通过');
        }
      })
    }
}
</script>

<style scoped>
.gegeg {
  background: rgba(255,255,255,0);
}
</style>