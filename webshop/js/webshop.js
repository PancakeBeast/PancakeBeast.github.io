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


let database = firebase.database();

    let inpFind = document.getElementById("find"); // kobling til søkefeltet
    inpFind.addEventListener("keydown", finnOrd);
    let divResultat = document.getElementById("resultat"); // kobling til div#resultat

    function finnOrd(e) {
        if (e.keyCode === 13) { // bruker trykket return
            let valgt = inpFind.value;
            let ref = firebase.database().ref("produkt").orderByChild("navn").equalTo(valgt);
            ref.once("value").then(function (snapshot) {
                let funnet = snapshot.val();
                if (funnet) {
                    // vi fant noe som matcher
                    let htm = Object.entries(funnet).map(([k,v]) => {
                      let felt = Object.entries(v).map(([k,v]) => 
                          `<li>${k} : ${v}</li>`
                      );
                      return `${k} <ul>${felt.join('')}</ul>`;
                    });
                    divResultat.innerHTML = htm;
                } else {
                    divResultat.innerHTML = "Ingen treff (sjekk stor/liten bokstav)";
                }
            });
        }
    }
}