<template>
  <div >
   navbar  -<button type="" @click="handleClick()">click</button>
   
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick(){
        this.$emit("event")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
      background-color: yellow;
    }
</style>
