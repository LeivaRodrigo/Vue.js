const app = Vue.createApp({
  data() {
    return {
      name: "Rodrigo",
      age: 24,
      number: Math.random(),
      imageSrc: "https://i.pinimg.com/originals/14/64/f5/1464f5cbd3244c9d684c1e5c923cebea.jpg",
    };
  },
});

app.mount("#assignment");
