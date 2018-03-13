function setup(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEzbt-2B7LXKsKOnmU7A3K804CFcnNBEI",
    authDomain: "webshop-aae86.firebaseapp.com",
    databaseURL: "https://webshop-aae86.firebaseio.com",
    projectId: "webshop-aae86",
    storageBucket: "webshop-aae86.appspot.com",
    messagingSenderId: "429485216202"
  };
  firebase.initializeApp(config);
}



ref.once("value").then(function (snapshot) {
  let produktet = snapshot.val();
  if (produktet) {
    console.log(produktet.kundenr); // skriver ut kundenr
  }
});

function sok
()