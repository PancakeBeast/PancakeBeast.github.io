function setup() {
    var config = {
        apiKey: "AIzaSyBlPjI5glXQ6ilEg9EVVPQS1lFh_Bsfa7c",
        authDomain: "risk-b1fc9.firebaseapp.com",
        databaseURL: "https://risk-b1fc9.firebaseio.com",
        projectId: "risk-b1fc9",
        storageBucket: "",
        messagingSenderId: "217937368827"
      };
      firebase.initializeApp(config);

      let database = firebase.database();

      let land = database.ref("land");
      land.on("child_added", visLand)

      let kort = database.ref("kort");
      kort.on("child_added", visKort)
}

function visLand(snapshot) {
    let land = snapshot.key;
    let divTarget = document.getElementById("main");
    divTarget.innerHTML += `<div>${land}</div>`
}

function visKort(snapshot) {
  let kort = snapshot.key;
  let divTarget = document.getElementById("main");
  divTarget.innerHTML += `<div>${kort}</div>`
}