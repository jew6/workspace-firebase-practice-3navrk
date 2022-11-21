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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();
  console.log("Email: "+email+"Password: "+password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href="Surveyresult.html";
      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

