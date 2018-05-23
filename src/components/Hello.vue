<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click = "to">gaga</div>
    <login></login> 
  </div>
</template>

<script>
import login from "@/components/HelloWorld"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my multiple-page Vue.js App'
    }
  },
  methods:{
    to(){
      location.href = "index.html"
    }
  },
  components: {
      login
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
