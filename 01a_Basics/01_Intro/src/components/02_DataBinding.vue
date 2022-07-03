<template>
  <!--
  Data_Binding Syntax Using Interpolation and Conditionals
  -->
  <div>
    <h1>{{ istGrossInSchrift ? title.toUpperCase() : title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Meine zweite Komponente in Gross-Schrift! (02_DataBinding.vue)',
      istGrossInSchrift: false,
    }
  },
}
</script>

<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 2px solid lightgreen;
}
</style>
