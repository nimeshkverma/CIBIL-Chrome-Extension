"use strict";
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
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