<template>
  <div id="app">
    <router-view/>
<!--    <homeBtn></homeBtn>-->
  </div>
</template>

<script>
  import homeBtn from './components/homeBtn'
  export default {
     data () {
       return {

       }
     },
    created() {

    },
    components: {
      homeBtn
    }
  }
</script>
<style>
</style>
