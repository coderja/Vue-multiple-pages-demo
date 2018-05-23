<template>
  <div>
    <div>
        欢迎{{msg}}
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
 created(){
     this.msg = this.$route.params.user;
     console.log(this.$route.params.user)
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
