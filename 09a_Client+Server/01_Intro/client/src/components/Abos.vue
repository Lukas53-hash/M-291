<template>
  <div>
    <h2>Abos</h2>
    <div v-if="abos.length">
      <ul>
        <li v-for="abo in abos" :key="abo.url">
          {{ abo.name }} is a {{ abo.starship_class }}
        </li>
      </ul>
    </div>
    <button v-else @click="loadAbos" :disabled="loading">Lädt Abos</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Abos',
  data() {
    return {
      loading:false
    }
  },
  computed: {
    ...mapState(["abos"])
  },
  methods:{
    loadShips() {
      this.loading = true;
      this.$store.dispatch('loadAbos');
    }
  }
}
</script>
