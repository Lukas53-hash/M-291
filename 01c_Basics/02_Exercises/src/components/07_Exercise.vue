<!--
Aufgabe: Einkaufsliste mit Two-Way-Binding
Im <div class="user-input">
  a. Erstellen Sie ein input-Element, welche Ihre Einkaufsartikel erfasst (?). Binden dazu eine Variable (??)
  ans input-Element (Tipp: Direktive v-model und ref verwenden). Optional: Wenn Sie die Einkaufsartikel erfassen
  und Enter drücken, dann wird der Click-Event des Buttons ausgelöst (Tipp: @keyup.enter verwenden)
  b. Erstellen Sie ein button-Element  (?), mit einem click-Event
  (für den Aufruf der Methode, um Artikel in die Einkaufsliste (??) hinzuzufügen) und mit dem Text "Add".

Im <ul>
  c. Geben Sie mit v-for die Artikel der Einkaufsliste aus so, dass
    - im span-Element der Artikel erscheint (?)
    - ein button-Element mit einem click-Event
    (für den Aufruf der Methode, um Artikel aus der Einkaufsliste zu löschen) (??)

d. Erstellen Sie ein button-Element mit einem click-Event
    (für den Aufruf der Methode, um die komplette Einkaufsliste zu löschen) (?)

Methoden
e. Erstellen Sie eine Methode, um die Artikel in die Einkaufsliste hinzuzufügen (?).
f. Erstellen Sie eine Methode, um einen bestimmten Artikel aus der Einkaufsliste zu löschen. Wenn kein
 Artikel-Index angegeben wird, dann werden alle Artikel gelöscht (?).
-->
<template>
  <div class="container">
    <h2>Einkaufsliste</h2>
    <div class="user-input">
      <!-- a.?-->
      <input/>
      <!-- b.?-->
      <button>Add item</button>
    </div>

    <ul>
      <li>
        <!-- c.?-->
        <span></span>
        <!-- c.??-->
        <button class="button--remove">Remove</button>
      </li>
    </ul>
    <br />
    <!-- d.?-->
    <button class="button--delete">Delete all</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //a.??
      //b.??
    }
  },
  methods: {
    //e.?
    //f.?
  },
}
</script>

<style lang="scss">
$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>
