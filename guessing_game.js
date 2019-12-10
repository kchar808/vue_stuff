var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    myNumber: 45,
    userNumber: 0,
    result: ""
  },
  methods: {
    usersGuess: function() {
      if (this.userNumber === this.myNumber) {
        this.result = "correct!";
      } else if (this.userNumber < this.myNumber) {
        this.result = "too low";
      } else {
        this.result = "too high";
      }
      console.log(this.result);
    }
  }
});
