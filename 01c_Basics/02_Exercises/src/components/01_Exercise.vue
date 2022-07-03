<!--
Aufgabe: Loop Directive (v-for): Iterating over different Items
a. Geben Sie die Zahlen 1 bis 5 über das div anhand der Direktive v-for aus (?).
b. Geben Sie die Zahlen 1 bis 5 als Listitem (ul > li) anhand der Direktive v-for aus (??).
c. Erstellen Sie ein Array mit mind. 3 Elementen als Data-Prop und geben Sie deren Inhalt als Listitem (ul > li)
anhand der Direktive v-for aus (???).
d. Erstellen Sie ein Array mit mind. 2 Objekten (mit je 3 Eigenschaften) als Data-Prop und
geben Sie deren Inhalt als Listitem (ul > li) anhand der Direktive v-for aus (????).
-->
<template>
  <div>
    <h1>Looping through arrays</h1>
    <!-- a. -->
    <div>?</div>

    <!-- b. -->
    <ul>
      <li>??</li>
    </ul>

    <!-- c. -->
    <ul>
      <li>???</li>
    </ul>

    <!-- d. -->
    <h3>XY</h3>
    <ol>
      <li>????</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //???
      //????
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
