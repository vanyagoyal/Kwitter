var firebaseConfig = {
      apiKey: "AIzaSyBhXfd2l0fnFDzabH3m6eszfSCYEoEeQv0",
      authDomain: "kwitter-a16a9.firebaseapp.com",
      databaseURL: "https://kwitter-a16a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-a16a9",
      storageBucket: "kwitter-a16a9.appspot.com",
      messagingSenderId: "401978275152",
      appId: "1:401978275152:web:4cbb23ecd1a8b81504a855"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("RoomName" , roomname);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='Room_Name' id='"+Room_names+"' onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("RoomName" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("UserName");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}