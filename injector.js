"use strict";

function makeDoubleDigit(input) {
	switch(input.length) {
		case 0:
            return "00";
        break;
        
        case 1:
            return "0"+input;
        break;

        case 2:
            return input;
        break;
    }
    return input
}

chrome.storage.sync.get(["CIBILElementIndex","CIBILElementLastIndex"], function(items){
	var CIBILElementIndex = items["CIBILElementIndex"];
	var CIBILElementLastIndex = items["CIBILElementLastIndex"];
	if(CIBILElementIndex<=CIBILElementLastIndex){ 
		chrome.storage.sync.get([CIBILElementIndex.toString()], function(items){
			var dataObject = items[CIBILElementIndex.toString()]
			document.querySelector('input[name="inquiryAmount"]').value = dataObject["inquiryAmount"];
			document.querySelector('select[name="purpose"]').value = makeDoubleDigit(dataObject["purpose"]);
			document.querySelector('input[name="fullName"]').value = dataObject["fullName"];
			document.querySelector('input[name="dobDay"]').value = makeDoubleDigit(dataObject["dobDay"]);
			document.querySelector('input[name="dobMonth"]').value = makeDoubleDigit(dataObject["dobMonth"]);
			document.querySelector('input[name="dobYear"]').value = dataObject["dobYear"];
			document.querySelector('select[name="gender"]').value = dataObject["gender"];
			document.querySelector('input[name="incomeTaxId"]').value = dataObject["incomeTaxId"];
			document.querySelector('input[name="universalId"]').value = dataObject["universalId"];
			document.querySelector('input[name="currrentAddress"]').value = dataObject["currrentAddress"];
			document.querySelector('select[name="currrentAddressState"]').value = dataObject["currrentAddressState"];
			document.querySelector('select[name="currrentAddressCategory"]').value = makeDoubleDigit(dataObject["currrentAddressCategory"]);
			document.querySelector('input[name="currrentAddressPincode"]').value =dataObject["currrentAddressPincode"];

			chrome.storage.sync.set({'CIBILElementIndex':CIBILElementIndex+1}, function(){});
		})
	}
});
