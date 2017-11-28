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
        let kundenr = snapshot.val();
        let info = snapshot.val();
        divListe.innerHTML += `
        <div>
        <h4>Kunde nr ${kundenr}</h4>
        <ul>
       
        <li>${info.fornavn} ${info.etternavn}
        <li>Epost : ${info.epost}
        <li>Mobil ${info.mobil}
        </ul>
        </div>  
        `;
    }

    ref.on("child_added", visLand);
}




