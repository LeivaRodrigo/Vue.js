const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      taskList: [],
      hideShow: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.taskList.push(this.enteredValue);
    },
    change() {
      this.hideShow = !this.hideShow;
    },
  },
});

app.mount("#assignment");
