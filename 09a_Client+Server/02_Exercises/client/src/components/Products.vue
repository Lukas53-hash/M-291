<template>
  <div>
      <h2>Products</h2>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <th>Price</th>
          <th>&nbsp;</th>
          <th>Discount</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <!-- ?? -->
        </tbody>
      </table>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Products',
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
  }
}
</script>

