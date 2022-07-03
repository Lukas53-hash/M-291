<template>

  <div>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Ausserdem bin ich {{ $store.state.age }}.
    </b-alert>

    <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <p>Hallo, ich bin {{ $store.state.name }}. Diese Meldung verschwindet nach {{ dismissCountDown }} Sekunden...</p>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Mehr Informationen
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Mehr Erfahren ({{ showDismissibleAlert ? 'sichtbar' : 'versteckt' }})
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
