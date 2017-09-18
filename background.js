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

// var fillData = function() {
// 	chrome.tabs.executeScript({
//         code: "var timeou=100000;",
//         allFrames: true
//   }, function(result){
//     chrome.tabs.executeScript({file: "injector.js", allFrames: true}, function(result) {});
//   });
// }

var fillData = function() {
    chrome.tabs.executeScript({
    file: "injector.js"
  });
}