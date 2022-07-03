<!--
Aufgabe: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
a. Wählen Sie je ein Data-Prop für die Directives v-text, v-html, v-bind
b. Die Tags h1,h2 und a sollen v-if, v-else-if, v-else sinnvoll versehen werden.
c. Überprüfen Sie jeweils die Ausgabe unter b indem Sie die verschiedenen von v-if, v-else-if testen.
-->
<template>
  <div>
    <h1></h1>
    <h2/>
    <a/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      //?
      // v-html
      //??
      // v-bind
      link: {
        //???
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
