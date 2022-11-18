// Create login Function here
function login()
{
    player_name = document.getElementById("playername").value;
    localStorage.setitem("player_name", playername);
    window.location = "gamepage.html";
}