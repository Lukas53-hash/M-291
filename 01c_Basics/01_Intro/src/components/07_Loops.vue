<template>
  <div>
    <h1>Sunrise</h1>
    <h3>Unsere Abos</h3>
    <ul>
      <li v-for="n in abos" :key="n">
        {{n. title}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        abos: [
          {
            title: 'Up Mobile XL',
          },{
            title: 'Up Mobile L',
          },{
            title: 'Up Mobile M',
          },{
            title: 'Up Mobile S',
          },
        ]
      }
    },
  }
</script>
<style lang="scss" scoped>
  li {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #DA291C;
    margin-top: 10px;
  }

  h1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #DA291C;
    margin-top: 60px;
  }
</style>