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
    let divListe = document.getElementById("dyr");
    

    let ref = firebase.database().ref("nations");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kunder);
            divListe.innerHTML = dropBox;
             }                
        
       });

       function makeDrop(kunder) { 
           let box = '<select id"kundenr">';
           let kunde = Objekt.keys(kunder);
           let navn = kundenr.map(e => `<option values="$(e)">$(kunder[e].fornavn)</option>';
    }