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

$('#google').click(function(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result)=>{
    const user = result.user;
    console.log("Google User "+user.email+" Log in");
  }).catch((error)=>{
    console.log("Error Message "+error.message);
  });
});

/*import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });*/