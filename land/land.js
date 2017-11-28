function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCTetEyL2bAB14p7oe2ecxJEp3XFR5xpX4",
        authDomain: "civcontries.firebaseapp.com",
        databaseURL: "https://civcontries.firebaseio.com",
        projectId: "civcontries",
        storageBucket: "civcontries.appspot.com",
        messagingSenderId: "673415315053"
      };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let land = snapshot.val();
        let info = snapshot.val();
        divListe.innerHTML += `
        <div>${land.capital}</div>
        <div>
        <ul>
        <li>Capital: ${info.capital}</li>
        <li>${info.capital} ${info.leader}</li>
        <li>Perks</li>
             <ul>
                <li>Money: ${info.perk.money}</li>
                <li>Move: ${info.perk.move}</li>
                <li>Science: ${info.perk.science}</li>
                <li>War: ${info.perk.war}</li>
            </ul>
        <li>Title: ${info.title}</li>
        </ul>
        </div>  
        `;
    }

    ref.on("child_added", visLand);
}




