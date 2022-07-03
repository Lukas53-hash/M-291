<template>
  <div>
    <h1>Kontakt</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hallo, wie geht es Ihnen?',
        'Was wollen sie bestellen?'
      ]
    }
  }
}
</script>
