chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "pre-fill-form":
            fillData();
        break;
    }
    return true;
});

var fillData = function() {
	chrome.tabs.executeScript({
    file: "injector.js"
  });
}