// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM',
  authDomain: 'grocerylist-91956.firebaseapp.com',
  databaseURL: 'https://grocerylist-91956.firebaseio.com',
  projectId: 'grocerylist-91956',
  storageBucket: 'grocerylist-91956.appspot.com',
  messagingSenderId: '813812426276',
  appId: '1:813812426276:web:93e5897af12892ff78dab1',
  measurementId: 'G-VZ83BTR72T',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data={}; // data sent to the database
  console.log(inputdata[2]);
  console.log(inputdata[2].name);
  console.log(inputdata[2].value);
  /* save the data to database */
  inputdata.forEach((entry)=>{
    console.log(entry);
    data[entry.name]=entry.value;
  });



});

// update the result in table
