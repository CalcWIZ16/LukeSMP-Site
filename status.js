// zero.minr.org
window.onload = serverStatus();
function serverStatus() {
  console.log("getting status");
  $.getJSON('https://api.mcsrvstat.us/2/mc.lukesmp.net', function(data) {
    if (data.motd.clean[0].includes("1")) {
      document.getElementById("server-status").innerHTML = "Status: Online";
    } else {
        document.getElementById("server-status").innerHTML = "Status: Offline";
    }
    document.getElementById("player-count").innerHTML = "Players: " + data.players.online + "/" + data.players.max;
    if (data.players.online > 0) {
        for (let i = 0; i <= 9; i++) {
          var player = data.players.list[i];
          var uuid = data.players.uuid[player].replaceAll("-", "");
            if (i<=4){
              document.getElementById("player-list1").innerHTML += data.players.list[i]+"<br>";
              document.getElementById("player-heads1").innerHTML += "<img src='https://crafatar.com/avatars/"+uuid+"?size=32&overlay=true'>";
            }
            if (i>4){
              document.getElementById("player-list2").innerHTML += data.players.list[i]+"<br>";
              document.getElementById("player-heads2").innerHTML += "<img src='https://crafatar.com/avatars/"+uuid+"?size=32&overlay=true'>";
            }
        }
    }
  });
}