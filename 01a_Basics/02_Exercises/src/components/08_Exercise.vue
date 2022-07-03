<!--
Aufgabe: TwoWayBinding Using v-model
a. Wählen Sie je ein Data-Prop, weisen Sie diesem je einen Text zu (?, ??) und geben Sie
den Text über h2,h3 Tags aus.
b. Wählen Sie je ein passendes Data-Prop für Name und Musik-Stil (???, ????) und verwenden
Sie es für den Input und Select-Tag. Wenn Sie Namen und Musik-Stil wählen, dann erscheint die
Auswahl im Teil "Anmeldung" (s. u
c. Optional: Stylen Sie die h2,h3, div (form) für die Eingabe und
div für die Anmeldung/Ausgabe (overview) so, dass ausschliesslich die
Styles der Komponente und nicht die Styles src/styles verwendet werden.
Überprüfen Sie die Ausgabe.
-->
<template>
  <section>
    <div>
      <h2></h2>
      <h3></h3>
    </div>
    <div>
      <!-- Eingabe des Benutzers -->
      <label>
        Name
        <input/>
      </label>
      <label>
        Preferred music style
        <select>
          <option value="Jazz">Jazz</option>
          <option value="Rock">Rock</option>
          <option value="Funk">Funk</option>
          <option value="Blues">Blues</option>
        </select>
      </label>
    </div>
    <div>
      <!-- Auswahl des Benutzers (Ausgabe) -->
      <h3>Anmeldung</h3>
      <ul>
        <li>Name: </li>
        <li>Preference: </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //?
      //??
      //???
      //????
    }
  },
}
</script>

<style lang="scss" module>
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgray;
}

.subtitle {
  color: #4fc08d;
  font-style: italic;
  text-align: center;
}

.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;

    + li {
      margin-top: 20px;
    }
  }
}
</style>
