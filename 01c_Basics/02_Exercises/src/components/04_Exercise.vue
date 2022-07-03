<!--
Aufgabe: Fallbeispiel Overlays
a. Erstellen Sie mit v-for fünf div-Elemente mit einem click-Event (für den Aufruf der Off-Methode) und
dem Beispieltext "Overlay Text xy pressed!", wobei xy der Index ist.
b. Erstellen Sie mit v-for fünf HTML-Links mit einem click-Event (für den Aufruf der On-Methode)
und mit dem Text "Trigger 1" .. "Trigger 5"
c. Initialisieren Sie einen Index mit -1 (?)
d. Erstellen Sie bei (??, ???) je eine Methode, welche beim Anwählen
des Trigger xy den Style-Display auf "block" oder "none" setzt.
-->
<template>
  <div>
    <h1>Triggering Overlays</h1>
    <div id="overlay">
      <div></div>
    </div>
    <div>
      <ul>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      //?
    }
  },
  methods: {
    //??
    //???
  }
}
</script>

<style lang="scss" scoped>
h1, ul {
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
  background: #4fc08d;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
