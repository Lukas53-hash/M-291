<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
    <!-- If more than HTML element then root (like div) is mandatory -->
<!--    <MyComponent1 />-->
<!--    <MyComponent2 />-->
<!--    <MyComponent3 />-->
<!--    <MyComponent4 />-->
<!--    <MyComponent5a />-->
<!--    <MyComponent5b />-->
<!--    <MyComponent6 />-->
<!--    <MyComponent7 />-->
<!--    <MyComponent8 />-->
<!--    <MyComponent9 />-->
<!--    <MyComponent9b />-->
<!--    <MyComponent10a />-->
<!--    <MyComponent10b />-->
<!--    <MyComponent11 />-->
    <MyComponent12 />
  </div>
</template>

<script>
/* Import all components */
import Demo01a from './components/01a_Simple'
import Demo01b from './components/01b_Title'
import Demo02 from './components/02_DataBinding'
import Demo03 from './components/03_StylingComponents'
import Demo04 from './components/04_CSS-Modules'
import Demo05a from './components/05a_VueDirectives'
import Demo05b from './components/05b_VueDirectives'
import Demo06 from './components/06_TwoWayBinding'
import Demo07 from './components/07_Loops'
import Demo08 from './components/08_IteratingArrays'
import Demo09a from './components/09a_IteratingObjects'
import Demo09b from './components/09b_DemoOverlays'
import Demo10a from './components/10a_DemoBasket'
import Demo10b from './components/10b_DemoBasket'
import Demo11 from './components/11_LifecycleHooks'
import Demo12 from './components/12_ShoppingList'

export default {
  components: {
    // MyComponent1: Demo01,
    // MyComponent2: Demo02,
    // MyComponent3: Demo03,
    // MyComponent4: Demo04,
    // MyComponent5a: Demo05a,
    // MyComponent5b: Demo05b
    // MyComponent6: Demo06,
    // MyComponent7: Demo07,
    // MyComponent8: Demo08,
    // MyComponent9: Demo09,
    // MyComponent9b: Demo09b,
    // MyComponent10: Demo10,
    // MyComponent10b: Demo10b,
    // MyComponent11: Demo11,
    MyComponent12: Demo12,
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
