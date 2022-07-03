<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
    <!-- If more than HTML element then root (like div) is mandatory -->
    <MyComponent1 />
  </div>
</template>

<script>
/* Import all components */
import Ex01 from './components/01_Exercise'

export default {
  components: {
    MyComponent1: Ex01,
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
