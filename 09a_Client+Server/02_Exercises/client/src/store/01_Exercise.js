import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        //??
      }, 0);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadProducts(context) {
      //??
    }
  },

})
