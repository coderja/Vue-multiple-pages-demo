<template>
  <div>
    <div>
        用户名:<input type="text" v-model='msg'></br>
        <div>{{msg}}</div>
        <button @click='loginer'>登录</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
                msg:""
        }
    },
    updated(){
        console.log(this.msg)
    },
    methods:{
        loginer(){
            this.$router.push('/success/'+this.msg)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
