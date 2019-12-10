var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    myNumber: 45,
    number: 0,
    result: ""
  },
  methods: {
    usersGuess: function() {
      if (parseInt(this.number) === parseInt(this.myNumber)) {
        this.result = "correct!";
      } else if (parseInt(this.number) < parseInt(this.myNumber)) {
        this.result = "too low";
      } else {
        this.result = "too high";
      }
      console.log(this.result);
    }
  }
});
