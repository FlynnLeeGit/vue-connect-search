<template>
  <div id="app">
    <h1>vue-connect-search</h1>
    <router-link to='/info'>
      /info
    </router-link>
    <router-view style="margin-top:20px"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #333;
}
</style>
