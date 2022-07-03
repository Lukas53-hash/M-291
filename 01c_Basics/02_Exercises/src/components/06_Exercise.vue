<!--
Aufgabe: Warenkorb 2
a. Erstellen Sie ein div-Element, welche die Anzahl Artikel im Warenkorb und den Totalbetrag ausgibt (?)
b. Geben Sie mit v-for die Produkte aus products (Array von Produkten) so, dass
  - beim ersten div (class="col") der Produkttitel erscheint (??)
  - beim zweiten div (class="col") der Produkttitel der HTML-Link mit einem click-Event
  (für den Aufruf der Methode, um Artikel in den Warenkorb hinzuzufügen) und mit dem Text "Add" (???)
c. Initialisieren Sie die Zähler für die Anzahl Artikel im Warenkorb und dessen Totalbetrag (????)
d. Erstellen Sie eine Methode, welche beim Hinzufügen von Artikeln in den Warenkorb, die Anzahl Artikel
inkrementiert und den Totalbetrag berechnet (?????).
e. Erstellen Sie eine Methode, welche den Betrag in CHF auf zwei Stellen nach dem Dezimalpunkt rundet (??????).
(Tipp betrag.toFixed(2))
-->
<template>
  <div class="container">
    <h1>Beispiel Warenkorb</h1>
    <h3>?</h3>
    <div class="even-columns">
      <div class="col">??</div>
      <div class="col"><a href="#">Add ???</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //????
      //????
      //Gegeben products
      products: [
        {title:"Socken", currency: "CHF", prize: 5.20},
        {title:"Pulli", currency: "CHF", prize: 66.80},
        {title:"Hosen", currency: "CHF", prize: 55.10},
      ],
    }
  },
  methods: {
    //?????,
    //??????
  },
}
</script>

<style lang="scss" scoped>
.even-columns {
  display: flex;
  //gap: 0.1em;
  padding: 0.2em;
}

.even-columns > * {
  flex: 1;
}

.card {
  padding: 2em;
  background: var(--clr-gradient);
  color: white;
  border-radius: 0.25rem;
}

/* added to help visualize the widths
.even-columns > *:nth-child(2n + 1) {
  outline: 1px solid blue;
}*/

/* =========================
   GENERAL STYLES
   NOT RELATED TO THE TUTORIAL
============================ */

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-primary: #ee6352;
  --clr-secondary: #d16e8d;
  --clr-accent: #f7f7ff;
  --clr-gradient: linear-gradient(
          -90deg,
          var(--clr-primary),
          var(--clr-secondary)
  );
  --ff-title: bungee, sans-serif;
  --ff-body: canada-type-gibson, sans-serif;
  --fw-body: 300;
  --fw-bold: 800;
  --fw-title: 400;
  --fw-number: 800;
}

body {
  padding: 2rem;
  min-height: 80vh;
  font-family: var(--ff-body);
  font-weight: var(--fw-body);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
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
.container {
  width: min(95%, 30rem);
  margin: 0 auto;
}
</style>
