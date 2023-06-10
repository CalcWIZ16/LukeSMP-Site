function copyText() {
    var text = copyText.getElementById("copyText")
    navigator.clipboard.writeText(text.value);
    alert("Copied text to clipboard");
}