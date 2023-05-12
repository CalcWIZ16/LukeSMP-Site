window.onload = changeSubtitle();
function changeSubtitle() {
    var subtitle = document.getElementById("subtitle");
    // while (true) {
    //     subtitle.innerHTML = "Join today at <i>mc.lukesmp.net</i>";
    //     setTimeout(4000);
    //     subtitle.innerHTML = "Another subtitle";
    //     setTimeout(4000);
    //     subtitle.innerHTML = "Yet another subtitle";
    //     setTimeout(4000);
    //     subtitle.innerHTML = "new website is new :D";
    //     setTimeout(4000);
    // }
    for (var i = 0; i < Infinity; i++) {
        subtitle.innerHTML = "Join today at <i>mc.lukesmp.net</i>";
        setTimeout(4000);
        subtitle.innerHTML = "Another subtitle";
        setTimeout(4000);
        subtitle.innerHTML = "Yet another subtitle";
        setTimeout(4000);
        subtitle.innerHTML = "new website is new :D";
        setTimeout(4000);
    }
}