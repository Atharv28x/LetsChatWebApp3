var firebaseConfig = {
  apiKey: "AIzaSyAD9OaT5BcPydsxLglpG3RnmiCNYX4pEg4",
  authDomain: "kwitter-d66d6.firebaseapp.com",
  databaseURL: "https://kwitter-d66d6-default-rtdb.firebaseio.com",
  projectId: "kwitter-d66d6",
  storageBucket: "kwitter-d66d6.appspot.com",
  messagingSenderId: "296802061967",
  appId: "1:296802061967:web:e03dfbbd4e8abe7f202afa"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
  {
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name`"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}