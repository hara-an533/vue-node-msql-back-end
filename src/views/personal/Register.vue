<template>
  <div>
      <p>
        用户名：
        <input type="text" name="username" v-model="username" id="username" />
      </p>
      <p>
        密码：
        <input type="password" name="pwd" v-model="pwd" id="pwd" />
      </p>
      <p>
        手机号：
        <input type="text" name="tel" id="tel" v-model="tel" />
      </p>
      <p>
        <button @click="reg">注册</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      username: "",
      pwd: "",
      tel: ""
    };
  },
  methods: {
    reg: function() {
      console.log(this.username, this.pwd, this.tel);
      this.axios.post('api/reg',{params:{username:this.username,pwd:this.pwd,tel:this.tel}}).then((res)=>{
          if(res.data=='success'){
              this.$router.push('/login')
          }else {
              alert(res.data)
          }
      })
    }
  }
};
</script>

<style>
</style>