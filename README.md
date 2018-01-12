CIBIL Prefill Chrome Extension
==========

The unofficial [CIBIL Report Generation Form Prefill](https://consumer.cibil.com/products/tile.do?name=orderForm.creditReportingPlusScore) chrome extension. Makes your life easy by semi automating the CIBIL Report generation work.


Installing
-----

Download or Clone this Git Repositiry and load as an unpacked extension.

Source Code: [https://github.com/nimeshkverma/CIBIL-Chrome-Extension](https://github.com/nimeshkverma/CIBIL-Chrome-Extension)


Unpacked Extension
-----

- If you downloaded the code, unzip the file.
- Open (chrome://extensions/) or select the menu `Window > Extensions`.
- Enable the developer mode at top right.
- Click `Load unpacked extension...` and select the source code folder.
- Enjoy!


Features / Description
-----

- An Empty form to be filled in order to generate a CIBIL Report looks like this:

<p align="center"> 
<img src="https://github.com/nimeshkverma/CIBIL-Chrome-Extension/blob/master/images/Empty-CIBIL-Form.png">
</p>

- If you have to generate the report for a significant number of times, it is real pain to input each value in each of the field. This pluggin comes handy for this particular use case.
- Using this pluggin you can Upload the data for the each of CIBIL Report you have to create in the form of a [CSV in the given format](https://github.com/nimeshkverma/CIBIL-Chrome-Extension/blob/master/CIBIL-Input-Sample-Data.csv) and Pre Fill the data by just clicking on the next button.

Usage Instructions
-----
- After adding the Pluggin in you chrome, click on the CIBIL Asst. Icon on near the top right corner of the chrome window
- Following Popup will be seen:

<p align="center"> 
<img src="https://github.com/nimeshkverma/CIBIL-Chrome-Extension/blob/master/images/CIBIL-Pluggin-Options.png">
</p>

- Click on the 'Choose File' button and select the a CSV file with the data you want to Prefill in the format similar to [this file](https://github.com/nimeshkverma/CIBIL-Chrome-Extension/blob/master/CIBIL-Input-Sample-Data.csv)
- Click on the 'Submit' button to Store the CSV data into the Chromes' LocalStorage
- Click on the 'Next' button to Prefill the Data and get the following:

<p align="center"> 
<img src="https://github.com/nimeshkverma/CIBIL-Chrome-Extension/blob/master/images/Filled-CIBIL-Form.png">
</p>

Issues
-----
- Code Quality needs to be improved
- Edge cases are prone to cause bugs and needs to be handled
- Code Structure needs improvement in the domain of Modularity and Decoupling
- Bundling of the complete package
- The UI of the pluggin is not impressive.


Contributing
-----

Fork at it.

