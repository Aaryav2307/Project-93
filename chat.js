function login() {
    user_name = document.getElementById("user_name").value;
    window.location = "chat_room.html"
    localStorage.setItem("user_name", user_name);
}
