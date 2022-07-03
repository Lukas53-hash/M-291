<template>
  <div>
    <MyComponent />
  </div>
</template>

<script>
import Demo from './components/01_Watchers'

export default {
  components: {
    MyComponent: Demo
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
