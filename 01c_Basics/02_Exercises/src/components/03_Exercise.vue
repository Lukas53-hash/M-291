<!--
Aufgabe: Vue Methods
a. Erstellen Sie mit v-for fünf HTML-Links mit einem click-Event und mit dem Text "Trigger 1" .. "Trigger 5"
b. Erstellen Sie bei (?) eine Methode, welche beim Anwählen z.B. des 3. Links erscheint der alert "3 has been clicked".
-->
<template>
  <div>
    <h1>Triggering Vue Methods</h1>
    <ul>
      <li>
        <a href="#"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    //?
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;

  + li {
    margin-top: 10px;
  }
}

a {
  display: inline-block;
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
