var firebaseConfig = {
  apiKey: "AIzaSyBJ2GY8GrmP_EnaS6osD50ONB1opPYKbFk",
  authDomain: "jonathanwalkergrocerylist2022.firebaseapp.com",
  projectId: "jonathanwalkergrocerylist2022",
  storageBucket: "jonathanwalkergrocerylist2022.appspot.com",
  messagingSenderId: "232752388789",
  appId: "1:232752388789:web:cc0a99c426464c28f0bcfc",
  measurementId: "G-FXC5X0N5X9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = "jakewalker1138@gmail.com";
  var password = "Sonic101";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
