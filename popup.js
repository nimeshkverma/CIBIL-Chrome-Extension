"use strict";
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("csvSubmit").onclick = function() {
    		var csvFile = document.getElementById("csvFile").files[0];
			parseCSVContent(csvFile, storeCSVLocally);
    }
    document.getElementById("next").onclick = function() {
        chrome.extension.sendMessage({
            type: "pre-fill-form",
        });

    }
}, false);


function storeCSVLocally(csvDataArray) {
	var processedData = {}
	var elementNo = 0
	csvDataArray.map((csvElementObject) => {
		elementNo = elementNo+1;
		processedData[elementNo]=csvElementObject;
	});
	chrome.storage.sync.set(processedData, function(){});
	chrome.storage.sync.set({'CIBILElementIndex':1}, function(){});
	chrome.storage.sync.set({'CIBILElementLastIndex':elementNo}, function(){});
}

function parseCSVContent(csvFile, callBack) {
	Papa.parse(csvFile, {
		header: true,
		dynamicTyping: true,
		complete: function(results) {
		callBack(results.data);
        }
    });
}
