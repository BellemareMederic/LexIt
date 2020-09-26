<template>
  <h1>LexIt</h1>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/themes">Themes</router-link>
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
