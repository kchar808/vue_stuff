var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  methods: {
    changeMessage: function() {
      console.log("..changing..");
      this.message = "changed";
    }
  }
});