window.onload = getServerStatus();
function getServerStatus() {
  console.log("getting status");
  $.getJSON('https://api.mcsrvstat.us/2/zero.minr.org', function(data) {
    if (data.motd.clean[0].includes("1")) {
      document.getElementById("server-status").innerHTML = "Status: Online";
    } else {
        document.getElementById("server-status").innerHTML = "Status: Offline";
    }
    document.getElementById("player-count").innerHTML = "Players: " + data.players.online + "/" + data.players.max;
    if (data.players.online > 0) {
        for (let i = 0; i <= 9; i++) {
            if (i<=4){
              var player = data.players.list[i];
              var uuid = data.players.uuid[player].replaceAll("-", "");
              document.getElementById("player-list1").innerHTML += data.players.list[i]+"<br>";
              document.getElementById("player-heads1").innerHTML += "<img src='https://minotar.net/helm/"+data.players.list[i]+"/32.png' class='player-head'>";
            }
            if (i>4){
                document.getElementById("player-list2").innerHTML += data.players.list[i]+"<br>";
                document.getElementById("player-heads2").innerHTML += "<img src='https://minotar.net/helm/"+data.players.list[i]+"/32.png' class='player-head'>";
            }
        }
    }
  });
}