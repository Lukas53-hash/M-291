<template>
  <div>
    <h1>Triggering Overlays (09b_DemoOverlays.vue)</h1>
    <div id="overlay" @click="overlayOff()">
      <div id="text">Overlay Text {{ index }} pressed!</div>
    </div>
    <div>
      <ul>
        <li v-for="n in 5" :key="n">
          <a href="#" @click="overlayOn(n)">Overlay {{ n }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      index: -1
    }
  },
  methods: {
    overlayOn(n) {
      document.getElementById("overlay").style.display = "block";
      this.index = n;
      },
    overlayOff() {
      document.getElementById("overlay").style.display = "none";
    },
  },
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
