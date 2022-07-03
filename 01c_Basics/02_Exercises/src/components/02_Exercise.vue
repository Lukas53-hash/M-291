<!--
Aufgabe: Loop Directive (v-for): Iterating over Objects
a. Erstellen Sie ein Array mit mind. 3 Objekten (mit je 2 Eigenschaften) als Data-Prop.
Eine der Objekt-Eigenschaften ist ein Array Ihrer Wahl. (?)
b. Geben Sie deren Inhalt als Listitem (ul > li) und
je die Array-Elemente der Objekt-Eigenschaft (ol > li) anhand der Direktive v-for aus.
-->
<template>
  <div>
    <h1>Looping through arrays of objects</h1>
    <ul>
      <li>
        <ol>
          <li></li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //?
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
