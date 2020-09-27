<template>
  <h1>LexIt</h1>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/theme">Themes</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
body{
  margin:0;
  min-height: 100vh;
  background-color: #fff;
  background-image: linear-gradient(200deg, #fff 30%, #d0f8ff 70%);
  background-color: #abe9cd;
  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);



  }
  h1{
    text-align: center;
    font-size:3em;
  }
  nav{
    text-align: center;
    a{
      margin-left:20px;
      text-decoration: none;
    }
  }


</style>
