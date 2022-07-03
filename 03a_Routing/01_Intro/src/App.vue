<template>

  <div id="app">
    <div id="logo"><img class="logo" alt="Sunrise Logo" src="./assets/logo.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/kontakt">Kontakt</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">

@import 'styles/global';
</style>
