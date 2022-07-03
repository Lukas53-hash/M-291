
<template>
  <div class="container">
    <h1>Sonderangebot</h1>
    <div>
      Summer Sale
      <strike v-show="oldDiscount">Ist {{ oldDiscount }}%</strike>
      <strong> jetzt {{ discount }}% günstiger</strong><br/>
      <a href="#" @click="updateDiscount">Rabatt um 5% erhöhen</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 20,
    }
  },
  watch: {
    discount: {
      handler: function (newVal, oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      },
      immediate: false,
      deep: true
    }

  },
  methods: {
    updateDiscount(){
      this.discount = this.discount + 5;
    }
  }
}
</script>
<style lang="scss" scoped>
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
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 15px;
}
</style>
