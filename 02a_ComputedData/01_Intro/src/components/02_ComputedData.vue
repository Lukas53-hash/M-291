<!--
  Implementing Computed Data into a Vue Component
-->
<template>
    <div class="container">
    <h3>Provide number of items (greater 0)</h3>
    <input v-model="items" placeholder="Total amount" />
    <h3 class="output">{{ totalValidated }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: 1
    }
  },
  computed: {
    total() {
      return this.items
    },
    totalValidated() {
      if (this.total < 1) {
        return 'The total must be more than zero'
      }
      else {
        return ''
      }
    }
  }
}
</script>


<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
  color: red;
}
</style>
