
//ADD YOUR FIREBASE LINKS HERE\
const firebaseConfig = {
      apiKey: "AIzaSyCxTgNTJE9_-OVRPinJssYpHc-b_3v6OA0",
      authDomain: "kwitter-62fbb.firebaseapp.com",
      databaseURL: "https://kwitter-62fbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-62fbb",
      storageBucket: "kwitter-62fbb.appspot.com",
      messagingSenderId: "402719601239",
      appId: "1:402719601239:web:40a962d2f1110288e12912",
      measurementId: "G-1MPBWVDTYD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
