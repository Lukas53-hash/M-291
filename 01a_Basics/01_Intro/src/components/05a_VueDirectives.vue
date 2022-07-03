<template>
  <!--
    VueDirectives
    demo_01-05: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
   -->
  <div>
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <a
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
      // v-text
      mytext: '05b_VueDirectives.vue (text)',
      // v-html
      myhtml: 'demo-5a </br>HTML in<br/><b>your data</b>',
      // v-bind
      link: {
        url: 'https://www.bzz.ch',
        target: '_blank',
        tabindex: '0',
        title: 'Hier zur BZZ Webseite (05b_VueDirectives.vue)'
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
