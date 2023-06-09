const app = Vue.createApp({
  data() {
    return {
      cssClass: "",
      toggle: true,
      bgc: "",
    };
  },
  computed: {
    changeClass() {
      return {
        user1: this.cssClass === "user1",
        user2: this.cssClass === "user2",
        visible: this.toggle,
        hidden: !this.toggle,
      };
    },
  },
  methods: {
    toggleClass() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
