function adduser(){
    username = document.getElementById("username").value;
    localStorage.setItem("UserName" , username);
    window.location = "kwitter_room.html";
}