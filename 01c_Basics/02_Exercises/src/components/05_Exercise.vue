<!--
Aufgabe: Warenkorb 1 (Returning Data Using Vue Methods)
a. Erstellen Sie ein div-Element, welche die Anzahl Artikel im Warenkorb und den Totalbetrag ausgibt (?)
b. Erstellen Sie mit v-for fünf Produkte "Product 1" .. "Product 5" und
fünf HTML-Links mit einem click-Event (für den Aufruf der Methode, um Artikel in den Warenkorb hinzuzufügen).
und mit dem Text "Add 1" .. "Add 5" (??)
c. Initialisieren Sie die Zähler für die Anzahl Artikel im Warenkorb und dessen Totalbetrag (???)
d. Erstellen Sie eine Methode, welche beim Hinzufügen von Artikeln in den Warenkorb, die Anzahl Artikel inkrementiert
und den Totalbetrag berechnet (????).
e. Erstellen Sie eine Methode, welche den Betrag in CHF auf zwei Stellen nach dem Dezimalpunkt rundet (?????).
(Tipp betrag.toFixed(2))
-->
<template>
  <div id="content">
    <h1>Beispiel Warenkorb</h1>
    <div>?</div>
    <ul>
      <li>??
        <a href="#">Add</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     //???
     //???
    }
  },
  methods: {
    //????,
    //?????
  },
}
</script>

<style lang="scss" scoped>
#content {
  padding-left: 20px;
}

ul {
  padding-left: 20px;
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
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
</style>
