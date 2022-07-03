<template>
  <div id="app">
    <b-container fluid>
      <p>Name: {{ $store.state.name }}</p>
      <p>Hobbies:</p>
      <ul>
        <li v-for="hobby in $store.state.hobbies" :key="hobby">{{hobby}}</li>
      </ul>
      <p>Ich arbeite als {{ $store.state.profession }}.</p>
      <MyComponent />
    </b-container>
  </div>
</template>

<script>
import Demo from './components/SimpleState';
export default {
  name: 'app',
  components:{
    MyComponent: Demo
  },
  data() {
    return {
      hobbies: this.$store.state.hobbies
    }
  },
  computed: {
  }
}
</script>
