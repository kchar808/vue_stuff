var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    showInfo: false
  },
  methods: {
    changeMessage: function() {
      console.log("..changing..");
      this.message = "changed";
    },
    toggleInfo: function() {
      console.log("message toggling");
      if (this.showInfo === true) {
        this.showInfo = false;
      } else {
        this.showInfo = true;
      }
    }
  }
});