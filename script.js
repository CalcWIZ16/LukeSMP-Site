window.onload = getServerStatus();
function getServerStatus() {
  console.log("getting status");
  $.getJSON('https://api.mcsrvstat.us/2/mc.lukesmp.net', function(data) {
    if (data.motd.clean[0].includes("Offline")) {
      // document.getElementById("server-status").innerHTML = "Offline";
    }
    //if server is online
    if (data.online == true) {
      //if server is online and has players
      if (data.players.online < 1) {
        //display server status
        
      }
    }
    if (data.players.max > 0) {
      document.getElementById("server-status").innerHTML += data.players.online + "/" + data.players.max;
    }
  });
}