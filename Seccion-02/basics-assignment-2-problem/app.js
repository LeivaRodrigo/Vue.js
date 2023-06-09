const app = Vue.createApp({
  data() {
    return {
      output: "",
      enter: "",
    };
  },
  methods: {
    showAlert() {
      alert("Presionaste boton de alerta!");
    },
    showOutput(event) {
      this.output = event.target.value;
    },
    enterPressed(event) {
      this.enter = event.target.value;
    },
  },
});

app.mount("#assignment");
