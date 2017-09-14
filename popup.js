window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({
            type: "pre-fill-form"
        });
    }
}