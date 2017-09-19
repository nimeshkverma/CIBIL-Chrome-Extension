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

 var genderMap = {
 	"Female":"1",
 	"Male":"2",
 	"Transgender":"3",
 }

  var currrentAddressCategoryMap = {
 	"Not Categorized":"04",
 	"Office Address":"03",
 	"Permanent Address":"01",
 	"Residence Address":"02",
 }
    		
var currrentAddressStateMap = {
	"Andaman & Nicobar Islands":"35",  		
	"Andhra Pradesh":"28",  		
	"APO Address":"99",  		
	"Arunachal Pradesh":"12",  		
	"Assam":"18",  		
	"Bihar":"10",  		
	"Chandigarh":"04",  		
	"Chhattisgarh":"22",  		
	"Dadra &amp; Nagar Haveli":"26",  		
	"Daman &amp; Diu":"25",  		
	"Delhi":"07",  		
	"Goa":"30",  		
	"Gujarat":"24",  		
	"Haryana":"06",  		
	"Himachal Pradesh":"02",  		
	"Jammu &amp; Kashmir":"01",  		
	"Jharkhand":"20",  		
	"Karnataka":"29",  		
	"Kerala":"32",  		
	"Lakshadweep":"31",  		
	"Madhya Pradesh":"23",  		
	"Maharashtra":"27",  		
	"Manipur":"14",  		
	"Meghalaya":"17",  		
	"Mizoram":"15",  		
	"Nagaland":"13",  		
	"Orissa":"21",  		
	"Pondicherry":"34",  		
	"Punjab":"03",  		
	"Rajasthan":"08",  		
	"Sikkim":"11",  		
	"Tamil Nadu":"33",  		
	"Telangana":"36",  		
	"Tripura":"16",  		
	"Uttar Pradesh":"09",  		
	"Uttaranchal":"05",  		
	"West Bengal":"19",
}

var purposeMap = {  	
	"Auto Loan":"01",	    
	"Business Loan - Director Search":"60",	    
	"Business Loan - General":"51",	    
	"Business Loan - Priority Sector - Agriculture":"53",	    
	"Business Loan - Priority Sector - Others":"54",	    
	"Business Loan - Priority Sector - Small Business":"52",	    
	"Business Loan - Secured":"50",	    
	"Business Loan - Unsecured":"61",	    
	"Business Loan Against Bank Deposits":"59",	    
	"Business Non-Funded Credit Facility-General":"55",	    
	"Business Non-Funded Credit Facility-Priority Sector-Agriculture":"57",	    
	"Business Non-Funded Credit Facility-Priority Sector-Others":"58",	    
	"Business Non-Funded Credit Facility-Priority Sector-Small Business":"56",	    
	"Commercial Vehicle Loan":"17",	    
	"Construction Equipment Loan":"33",	    
	"Consumer Loan":"06",	    
	"Corporate Credit Card":"35",	    
	"Credit Card":"10",	    
	"Education Loan":"08",	    
	"Fleet Card":"16",	    
	"Gold Loan":"07",	    
	"Housing Loan":"02",	    
	"Kisan Credit Card":"36",	    
	"Leasing":"11",	    
	"Loan Against Bank Deposits":"15",	    
	"Loan Against Shares/Securities":"04",	    
	"Loan on Credit Card":"37",	    
	"Loan to Professional":"09",	    
	"Microfinance - Business Loan":"40",	    
	"Microfinance - Housing Loan":"42",	    
	"Microfinance - Others":"43",	    
	"Microfinance - Personal Loan":"41",	    
	"Mudra Loans - Shishu / Kishor / Tarun":"39",	    
	"Non-Funded Credit Facility":"14",	    
	"Other":"00",	    
	"Overdraft":"12",	    
	"Personal Loan":"05",	    
	"Pradhan Mantri Awas Yojana - Credit Link Subsidy Scheme - PMAY CLSS":"44",	    
	"Prime Minister Jaan Dhan Yojana - Overdraft":"38",	    
	"Property Loan":"03",	    
	"Secured Credit Card":"31",	    
	"Tractor Loan":"34",	    
	"Two-wheeler Loan":"13",	    
	"Used Car Loan":"32",
}

chrome.storage.sync.get(["CIBILElementIndex","CIBILElementLastIndex"], function(items){
	var CIBILElementIndex = items["CIBILElementIndex"];
	var CIBILElementLastIndex = items["CIBILElementLastIndex"];
	if(CIBILElementIndex<=CIBILElementLastIndex){ 
		chrome.storage.sync.get([CIBILElementIndex.toString()], function(items){
			var dataObject = items[CIBILElementIndex.toString()]
			document.querySelector('input[name="inquiryAmount"]').value = dataObject["inquiryAmount"];
			document.querySelector('select[name="purpose"]').value = purposeMap["Personal Loan"];
			document.querySelector('input[name="fullName"]').value = dataObject["fullName"];
			document.querySelector('input[name="dobDay"]').value = makeDoubleDigit(dataObject["dobDay"]);
			document.querySelector('input[name="dobMonth"]').value = makeDoubleDigit(dataObject["dobMonth"]);
			document.querySelector('input[name="dobYear"]').value = dataObject["dobYear"];
			document.querySelector('select[name="gender"]').value = genderMap[dataObject["gender"]];
			document.querySelector('input[name="incomeTaxId"]').value = dataObject["incomeTaxId"];
			document.querySelector('input[name="universalId"]').value = dataObject["universalId"];
			document.querySelector('input[name="currrentAddress"]').value = dataObject["currrentAddress"];
			document.querySelector('select[name="currrentAddressState"]').value = currrentAddressStateMap[dataObject["currrentAddressState"]];
			document.querySelector('select[name="currrentAddressCategory"]').value = currrentAddressCategoryMap["Permanent Address"];
			document.querySelector('input[name="currrentAddressPincode"]').value =dataObject["currrentAddressPincode"];
			chrome.storage.sync.set({'CIBILElementIndex':CIBILElementIndex+1}, function(){});
		})
	}
});
