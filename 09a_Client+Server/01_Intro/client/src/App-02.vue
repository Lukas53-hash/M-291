<template>
  <div id="app">
    <b-container fluid>
      <h2>Iphones</h2>
      <ul v-if="iphones.length">
        <li v-for="iphones in iphones" :key="iphones.url">
          {{ iphones.title }} kam raus am {{ iphones.release_date }}
        </li>
      </ul>
      <div v-else>
        <i>Lädt Daten...</i>
      </div>
      <Ships />
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Ships from './components/Ships'
export default {
  name: 'app',
  components: {
    Ships
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(["iphones"])
  },
  created() {
    this.$store.dispatch("loadIphones")
  }
}
</script>
