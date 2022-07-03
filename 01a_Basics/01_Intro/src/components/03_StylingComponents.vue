<template>
  <!--
    Styling Components
    Demo_01-03: Importing SCSS into a Scoped Component
    -->
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Meine List-Komponente!',
      subtitle: '03_StylingComponents.vue',
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>

<style lang="scss" scoped>
//Here is the import
@import '../styles/typography';

h1 {
  font-size: 50px;
  text-align: center;
  color: $color-green; // Use variables from imported stylesheets
}
</style>
