<template>
  <div class="container">
    <h2>Sunrise</h2>
    <h3>Warenkorb: (Artikel: {{ totalItems }}) {{ formatPrize("CHF",totalCost) }}</h3>
    <div class="even-columns" v-for="item in products" :key="item">
      <div class="col">Produkt {{ item.title }}</div>
      <div class="col"><a href="#" @click="addToCart(item.prize)">Add {{ formatPrize(item.currency, item.prize) }}</a></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
      products: [
        {title:"Iphone 12 Pro Max", currency: "CHF", prize: 850.00},
        {title:"Iphone 13 Pro Max", currency: "CHF", prize: 1500.00},
        {title:"Iphone 11", currency: "CHF", prize: 650.00},
      ],
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
    },
    formatPrize(currency, val) {
      return `${currency} ${val.toFixed(2)}`
    },
  },
}
</script>

<style lang="scss" scoped>
.even-columns {
  display: flex;
  padding: 0.2em;
}

.even-columns > * {
  flex: 1;
}

.card {
  padding: 2em;
  background: var(--clr-gradient);
  color: #DA291C;
  border-radius: 0.25rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-primary: #DA291C;
  --clr-secondary: #DA291C;
  --clr-accent: #ffffff;
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
  background: #DA291C;
  border-radius: 10px;
  font-size: 10px;
  color: #ffffff;
  padding: 5px 10px;
  text-decoration: none;
}
.container {
  width: min(95%, 30rem);
  margin: 0 auto;
}
</style>
