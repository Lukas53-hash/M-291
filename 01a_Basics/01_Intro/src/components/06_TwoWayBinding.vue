<template>
  <!--
   TwoWayBinding Using v-model
  -->
  <section>
    <div>
      <h2 :class="$style.title">{{ title }}</h2>
      <h3 :class="$style.subtitle">{{ subtitle }}</h3>
    </div>
    <div :class="$style.form">
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Preferred music style
        <select name="music_style" v-model="music_style">
          <option value="Jazz">Jazz</option>
          <option value="Rock">Rock</option>
          <option value="Funk">Funk</option>
          <option value="Blues">Blues</option>
        </select>
      </label>
    </div>
    <div :class="$style.overview">
      <h3>Anmeldung</h3>
      <ul>
        <li>Name: {{ name }}</li>
        <li>Preference: {{ music_style }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Musik Sommer-Kurs',
      subtitle: 'Juli 202x (06_TwoWayBinding.vue)',
      name: '',
      music_style: ''
    }
  },
}
</script>

<style lang="scss" module>
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgray;
}

.subtitle {
  color: #4fc08d;
  font-style: italic;
  text-align: center;
}

.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;

    + li {
      margin-top: 20px;
    }
  }
}
</style>
