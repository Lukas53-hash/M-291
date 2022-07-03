<template>

  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {

      text: 'Sunrise',

      html: 'demo-5b </br>HTML in<br/><b>your data</b>',

      link: {
        url: 'https://www.sunrise.ch/de',
        target: '_blank',
        tabindex: '0',
        title: 'Mehr erfahren',
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
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
  color: #DA291C;
}

a {
  display: inline-block;
  background: #DA291C;
  border-radius: 50px;
  font-size: 25px;
  color: white;
  padding: 25px 60px;
  text-decoration: none;
  margin-left: 40%;
  margin-top: 20%;
}
</style>
