var START_ROW = 2;
var START_COL = 1;
var subject = "CAFU - Free Vehicle Inspection Report";
var slackEmail = 'free-vehicle-checkup-aaaak47jczysgueobepw6yqz7m@cafuglobal.slack.com';
var abc ="Hi XYZ,<br> Thank you for enrolling in the free Vehicle inspection. Please find the vehicle inspection report below : <br><br>"
var emailtest = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'><style>body{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.header{background-color:teal;color:#fff;text-align:center;padding:15px;font-size:24px;margin-bottom:0;padding-bottom:1px;box-shadow:0 2px 5px rgba(0,0,0,.2)}.container{max-width:600px;margin:0 auto;padding:0;background-color:#fff;border-radius:5px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.section{margin:10px 0;padding:20px;background-color:#fff;border-radius:5px}.section h2{color:teal;font-size:18px;margin:0 0 10px;padding:0;display:flex;align-items:center}.result{color:teal;font-weight:700}.result-pass{color:#090}.result-fail{color:red}table{width:100%;border-collapse:collapse;border-spacing:0}td,th{text-align:left;padding:8px}th{background-color:teal;color:#fff}</style></head><body><div class='container'><div class='header'><img src='https://www.cafu.com/wp-content/themes/cafu/images/cafu-logo-white.svg' alt='CAFU Logo' style='width:300px'><h3 style='font-weight:700'>Free Vehicle Health Inspection Report</h3></div><div class='section'><h2>🚗 Car Details</h2><table><tr><th>Car Attributes</th><th>Value</th></tr><tr><td>VIN Number</td><td>ALI123456</td></tr><tr><td>Mileage</td><td>22,000 Kms</td></tr><tr><td>Next Mileage</td><td>20,000 Kms</td></tr><tr><td>Vehicle Make</td><td>Honda</td></tr><tr><td>Vehicle Model</td><td>City</td></tr><tr><td>Vehicle Number Plate</td><td>J ALI</td></tr><tr><td>Vehicle Number Plate Emirati</td><td>Dubai</td></tr></table></div><div class='section'><h2>🔧 Minor Service</h2><table><tr><th>Service</th><th>Result</th></tr><tr><td>Oil Filter check-up</td><td>Fail ❌</td></tr><tr><td>Oil grade check-up</td><td>Pass ✅</td></tr><tr><td>Engine coolant levels</td><td>Pass ✅</td></tr><tr><td>Steering Fluid levels</td><td>Pass ✅</td></tr><tr><td>Washer fluid levels</td><td>Fail ❌</td></tr><tr><td>Wiper blade check-up</td><td>Pass ✅</td></tr></table></div><div class='section'><h2>🔋 Battery</h2><table><tr><th>Property</th><th>Value</th></tr><tr><td>Battery Health</td><td>49%</td></tr><tr><td>Battery Make</td><td>Ac Delco</td></tr></table></div><div class='section'><h2>🚗 Tyre PSI and Health</h2><table><tr><th>Property</th><th>Value</th></tr><tr><td>Front Right Tyre PSI</td><td>28</td></tr><tr><td>Front Left Tyre PSI</td><td>28</td></tr><tr><td>Back Right Tyre PSI</td><td>28</td></tr><tr><td>Back Left Tyre PSI</td><td>28</td></tr><tr><td>Tyre Health Inspection [Front - Right]</td><td>Pass ✅</td></tr><tr><td>Tyre Health Inspection [Front - Left]</td><td>Pass ✅</td></tr><tr><td>Tyre Health Inspection [Rear - Right]</td><td>Pass ✅</td></tr><tr><td>Tyre Health Inspection [Rear - Left]</td><td>Pass ✅</td></tr></table></div><div class='section'><h2>🛠️ Brake Pad Inspection and Engine Size</h2><table><tr><th>Property</th><th>Value</th></tr><tr><td>Brake Pad Inspection [Front - Right]</td><td>Pass ✅</td></tr><tr><td>Brake Pad Inspection [Front - Left]</td><td>Fail ❌</td></tr><tr><td>Brake Pad Inspection [Rear - Right]</td><td>Fail ❌</td></tr><tr><td>Brake Pad Inspection [Rear - Left]</td><td>Pass ✅</td></tr><tr><td>Engine Size</td><td>V7</td></tr></table></div><div class='section'><h2>💡 Lights Inspection</h2><table><tr><th>Property</th><th>Value</th></tr><tr><td>Lights Inspection [Front - Right]</td><td>Pass ✅</td></tr><tr><td>Lights Inspection [Front - Left]</td><td>Pass ✅</td></tr><tr><td>Lights Inspection [Rear - Right]</td><td>Fail ❌</td></tr><tr><td>Lights Inspection [Rear - Left]</td><td>Pass ✅</td></tr><tr><td>Lights Inspection [Right Brake Light]</td><td>Pass ✅</td></tr><tr><td>Lights Inspection [Left Brake Light]</td><td>Fail ❌</td></tr></table></div><div class='section'><h2>🧯 Fire Extinguisher Availability</h2><table><tr><th>Property</th><th>Value</th></tr><tr><td>Fire Extinguisher availability</td><td>Yes ✅</td></tr></table></div><div class='section'><h2>Result of the Inspection</h2><table><tr><th>Report</th><th>Result</th></tr><tr><td>Mileage Report</td><td>Minor Service Required</td></tr><tr><td>Tyre Report</td><td>Needs Tyre Change</td></tr><tr><td>Tyre PSI Report</td><td>Tyre PSI Top Up Required</td></tr><tr><td>Fire Extinguisher</td><td>Fire Extinguisher Expiry Status:<span class='battery-change' style='color:red;font-weight:700'>Expired</span></td></tr><tr><td>Battery Status</td><td>Battery Health: 49%<span class='battery-change' style='color:red;font-weight:700'>[Battery Change Needed]</span></td></tr><tr><td>Brake Pad Status</td><td style='color:red;font-weight:700'>Major Service Required</td></tr></table></div></div></body></html>";









// emailtest = abc + emailtest;


// var header = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'><style>body{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.header{background-color:teal;color:#fff;text-align:center;padding:15px;font-size:24px;margin-bottom:0;padding-bottom:1px;box-shadow:0 2px 5px rgba(0,0,0,.2)}.container{max-width:600px;margin:0 auto;padding:0;background-color:#fff;border-radius:5px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.section{margin:10px 0;padding:20px;background-color:#fff;border-radius:5px}.section h2{color:teal;font-size:18px;margin:0 0 10px;padding:0;display:flex;align-items:center}.result{color:teal;font-weight:700}.result-pass{color:#090}.result-fail{color:red}table{width:100%;border-collapse:collapse;border-spacing:0}td,th{text-align:left;padding:8px}th{background-color:teal;color:#fff}.result2{background-color:orange}</style></head>";

var header = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'><style>body{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.header{background-color:#4FC4CD;color:#fff;text-align:center;padding:15px;font-size:24px;margin-bottom:0;padding-bottom:1px;box-shadow:0 2px 5px rgba(0,0,0,.2)}.container{max-width:600px;margin:0 auto;padding:0;background-color:#fff;border-radius:5px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.section{margin:10px 0;padding:20px;background-color:#fff;border-radius:5px}.section h2{color:#4FC4CD;font-size:20px;margin:0 0 10px;padding:0;display:flex;align-items:center}.result{color:#4FC4CD;font-weight:700}.result-pass{color:#090}.result-fail{color:red}table{width:100%;border-collapse:collapse;border-spacing:0}td,th{text-align:left;padding:8px}th{background-color:#4FC4CD;color:#fff}.result2{background-color:orange}.header-text{text-align:left;font-size:22px;font-weight:bold;margin-top:60px;margin-left:30px;margin-right:30px}.header-paragraph{margin-left:30px;margin-right:30px;text-align:left;font-size:18px;font-weight:400;margin-top:50px}</style></head>";

// var logo = "<body><div class='container'><div class='header'><img src='https://www.cafu.com/wp-content/themes/cafu/images/cafu-logo-white.svg' alt='CAFU Logo' style='width:300px'><h3 style='font-weight:700'>Free Vehicle Health Inspection Report</h3></div>";




function sendEmailToUser(){
 SpreadsheetApp.flush();
//  Utilities.sleep(1000);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet = ss.getSheetByName("Form Responses 1");
 
  var sheet = ss.getSheetByName("report");
  // var data = sheet.getRange(START_ROW,START_COL,sheet.getLastRow()-1,23).getValues();

 Utilities.sleep(2000);
//  SpreadsheetApp.flush();
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
Logger.log(lastRow);
Logger.log(lastColumn);
// var lastColumn = sheet.getLastColumn().g;
  var lastRowValue = sheet.getRange(lastRow,1,1,63).getValues();
  Logger.log("The value of the last row in column A is: " + lastRowValue);


Logger.log(lastRowValue);


lastRowValue.forEach(function(row,i){
Logger.log("last row: " +row[1]);


    // var name = row[1];
    // var number = row[2];
    // var email = row[41];
    // var category = row[4];
    // var details = row[5];

    // var subject = "CAFU - Free Vehicle Health Checkup Report";
    // var EmailBody = "Dear " + name + "," + "<br><br>"+
    //                 "We recieved your problem with the following details" + "<br><br>"+
    //                 "Data" +data[i]+
    //                 // "Description : " + details + "<br><br>"+
    //                 // "Category : " + category + "<br><br>"+
    //                 // "A Customer Service Executive will contact you shortly "+ "<br><br>"
    //                 // "Regards,"+ "<br><br>"+
                    
    //                 "ABC Solutions."+ "<br><br>";
// console.log("Row :" +row[17]);


// // Logger.log(EmailBody);

// var header = "";
// var footer = "";
// var slackEmail = 'free-vehicle-checkup-aaaak47jczysgueobepw6yqz7m@cafuglobal.slack.com';


// For Multiple recipients
// var bcc1and2 = "xyz@example.com,abc@example.com";

    // GmailApp.sendEmail(email,subject,"",{'bcc':slackEmail, htmlBody:EmailBody});


  });



// var EmailBody = "<b>Timestamp</b>:"+ lastRowValue[0][0]+"<br><br>"+
// "<b>Order ID</b>:"+ lastRowValue[0][1]+"<br><br>"+
// "<b>VIN Number</b>:"+ lastRowValue[0][2]+"<br><br>"+
// "<b>Pilot Name</b>:"+ lastRowValue[0][3]+"<br><br>"+
// "<b>Mileage (Kms)</b>:"+ lastRowValue[0][4]+"<br><br>"+
// "<b>Next service Mileage (Kms)</b>:"+ lastRowValue[0][5]+"<br><br>"+
// "<b>MINOR SERVICE [Oil Filter check-up]</b>:"+ lastRowValue[0][6]+"<br><br>"+
// "<b>MINOR SERVICE [Oil grade check-up]</b>:"+ lastRowValue[0][7]+"<br><br>"+
// "<b>MINOR SERVICE [Engine coolant levels]</b>:"+ lastRowValue[0][8]+"<br><br>"+
// "<b>MINOR SERVICE [Steering Fluid levels]</b>:"+ lastRowValue[0][9]+"<br><br>"+
// "<b>MINOR SERVICE [Washer fluid levels]</b>:"+ lastRowValue[0][10]+"<br><br>"+
// "<b>MINOR SERVICE [Wiper blade check-up]</b>:"+ lastRowValue[0][11]+"<br><br>"+
// "<b>Fire Extinguisher availability</b>:"+ lastRowValue[0][12]+"<br><br>"+
// "<b>Fire Extinguisher Expiry Date</b>:"+ lastRowValue[0][13]+"<br><br>"+
// "<b>Battery Health Percentage</b>:"+ lastRowValue[0][14]+"<br><br>"+
// "<b>Battery Make</b>:"+ lastRowValue[0][15]+"<br><br>"+
// "<b>Front Right Tyre PSI</b>:"+ lastRowValue[0][16]+"<br><br>"+
// "<b>Front Left Tyre PSI</b>:"+ lastRowValue[0][17]+"<br><br>"+
// "<b>Back Right Tyre PSI</b>:"+ lastRowValue[0][18]+"<br><br>"+
// "<b>Back Left Tyre PSI</b>:"+ lastRowValue[0][19]+"<br><br>"+
// "<b>Tyre Health Inspection [Front - Right]</b>:"+ lastRowValue[0][20]+"<br><br>"+
// "<b>Tyre Health Inspection [Front - Left]</b>:"+ lastRowValue[0][21]+"<br><br>"+
// "<b>Tyre Health Inspection [Rear - Right]</b>:"+ lastRowValue[0][22]+"<br><br>"+
// "<b>Tyre Health Inspection [Rear - Left]</b>:"+ lastRowValue[0][23]+"<br><br>"+
// "<b>Tyre Health comments</b>:"+ lastRowValue[0][24]+"<br><br>"+
// "<b>Brake Pad Inspection [Front - Right]</b>:"+ lastRowValue[0][25]+"<br><br>"+
// "<b>Brake Pad Inspection [Front - Left]</b>:"+ lastRowValue[0][26]+"<br><br>"+
// "<b>Brake Pad Inspection [Rear - Right]</b>:"+ lastRowValue[0][27]+"<br><br>"+
// "<b>Brake Pad Inspection [Rear - Left]</b>:"+ lastRowValue[0][28]+"<br><br>"+
// "<b>Brake Fluid Check-up</b>:"+ lastRowValue[0][29]+"<br><br>"+
// "<b>Air Filter Check</b>:"+ lastRowValue[0][30]+"<br><br>"+
// "<b>Lights Inspection [Front - Right]</b>:"+ lastRowValue[0][31]+"<br><br>"+
// "<b>Lights Inspection [Front - Left]</b>:"+ lastRowValue[0][32]+"<br><br>"+
// "<b>Lights Inspection [Rear - Right]</b>:"+ lastRowValue[0][33]+"<br><br>"+
// "<b>Lights Inspection [Rear - Left]</b>:"+ lastRowValue[0][34]+"<br><br>"+
// "<b>Lights Inspection [Right Brake Light]</b>:"+ lastRowValue[0][35]+"<br><br>"+
// "<b>Lights Inspection [Left Brake Light]</b>:"+ lastRowValue[0][36]+"<br><br>"+
// "<b>Engine Size</b>:"+ lastRowValue[0][37]+"<br><br>"+
// "<b>Tyre Front Right (Width/Profile/Rim)</b>:"+ lastRowValue[0][38]+"<br><br>"+
// "<b>Tyre Front Left (Width/Profile/Rim)</b>:"+ lastRowValue[0][39]+"<br><br>"+
// "<b>Tyre Back Right (Width/Profile/Rim)</b>:"+ lastRowValue[0][40]+"<br><br>"+
// "<b>Tyre Back Left (Width/Profile/Rim)</b>:"+ lastRowValue[0][41]+"<br><br>"+
// "<b>General Feedback</b>:"+ lastRowValue[0][42]+"<br><br>"+
// "<b>VAS OrderID</b>:"+ lastRowValue[0][43]+"<br><br>"+
// "<b>Customer ID</b>:"+ lastRowValue[0][44]+"<br><br>"+
// "<b>Customer Name</b>:"+ lastRowValue[0][45]+"<br><br>"+
// "<b>Customer Email</b>:"+ lastRowValue[0][46]+"<br><br>"+
// "<b>Customer Phone Number (without dialcode should start without 0)</b>:"+ lastRowValue[0][47]+"<br><br>"+
// "<b>Vehicle Make</b>:"+ lastRowValue[0][48]+"<br><br>"+
// "<b>Vehicle Model</b>:"+ lastRowValue[0][49]+"<br><br>"+
// "<b>Vehicle Year</b>:"+ lastRowValue[0][50]+"<br><br>"+
// "<b>Vehicle Number Plate</b>:"+ lastRowValue[0][51]+"<br><br>"+
// "<b>Vehicle Number Plate Emirati</b>:"+ lastRowValue[0][52]+"<br><br>"+
// "<b>Timeslot</b>:"+ lastRowValue[0][53]+"<br><br>";
// // "<h1><b>CONCLUSION : </h1></b><br><br>"+
// // "<b>Mileage Report</b>:"+ lastRowValue[0][54]+"<br><br>"+
// // "<b>Tyre Report</b>:"+ lastRowValue[0][55]+"<br><br>"+
// // "<b>Tyre PSI report</b>:"+ lastRowValue[0][56]+"<br><br>"+
// // "<b>Fire Extinguisher</b>:"+ lastRowValue[0][57]+"<br><br>"+
// // "<b>Battery Status</b>:"+ lastRowValue[0][58]+"<br><br>"+
// // "<b>Brake Pad Status</b>:"+ lastRowValue[0][59]+"<br><br>";







var logo ="<body><div class='container'><div class='header'><img src='https://i.imgur.com/KRlUFEq.png' alt='CAFU Logo' style='width:450px'><h3 style='font-weight:700'>Free Vehicle Health Inspection Report</h3></div><p class='header-text'>Hello "+lastRowValue[0][45]+", </p><p class='header-paragraph'>Thank you for choosing CAFU for your recent car check-up appointment. We are committed to guaranteeing your vehicle's optimal performance and safety, and we appreciate your trust in us. </p><p class='header-paragraph'>Please find below your order details, check-up summary and detailed vehicle service report: </p>"

var car_section = "<div class='section'><h2>🚗  Car Details</h2><table><tr><th>Car Attributes</th><th>Value</th></tr><tr><td>VIN Number</td><td>"+lastRowValue[0][2]+"</td></tr><tr><td>Mileage</td><td>"+lastRowValue[0][4]+" Kms</td></tr><tr><td>Next Mileage</td><td>"+lastRowValue[0][5]+" Kms</td></tr><tr><td>Vehicle Make</td><td>"+lastRowValue[0][48]+"</td></tr><tr><td>Vehicle Model</td><td>"+lastRowValue[0][49]+"</td></tr><tr><td>Vehicle Number Plate</td><td>"+lastRowValue[0][51]+"</td></tr><tr><td>Vehicle Number Plate Emirati</td><td>"+lastRowValue[0][52]+"</td></tr></table></div>";




var minor_section = "<div class='section'><h2>🔧 Minor Service</h2><table><tr><th>Service</th><th>Result</th></tr><tr><td>Oil grade check-up</td><td>"+lastRowValue[0][7]+"</td></tr><tr><td>Engine coolant levels</td><td>"+lastRowValue[0][8]+"</td></tr><tr><td>Steering Fluid levels</td><td>"+lastRowValue[0][9]+"</td></tr><tr><td>Washer fluid levels</td><td>"+lastRowValue[0][10]+"</td></tr><tr><td>Wiper blade check-up</td><td>"+lastRowValue[0][11]+"</td></tr></table></div>";

var battery_section="<div class='section'><h2>🔋  Battery</h2><table><tr><th>Check</th><th>Result</th></tr><tr><td>Battery Health</td><td>"+lastRowValue[0][14]+"%</td></tr><tr><td>Battery Make</td><td>"+lastRowValue[0][15]+"</td></tr></table></div>";


var tyre_psi_health_section="<div class='section'><h2>🛞  Tyre PSI and Health</h2><table><tr><th>Check</th><th>Result</th></tr><tr><td>Front Right Tyre PSI</td><td>"+lastRowValue[0][16]+"<td></tr><tr><td>Front Left Tyre PSI</td><td>"+lastRowValue[0][17]+"<td></tr><tr><td>Back Right Tyre PSI</td><td>"+lastRowValue[0][18]+"<td></tr><tr><td>Back Left Tyre PSI</td><td>"+lastRowValue[0][19]+"<td></tr><tr><td>Tyre Health Inspection [Front - Right]</td><td>"+lastRowValue[0][20]+"<td></tr><tr><td>Tyre Health Inspection [Front - Left]</td><td>"+lastRowValue[0][21]+"<td></tr><tr><td>Tyre Health Inspection [Rear - Right]</td><td>"+lastRowValue[0][22]+"<td></tr><tr><td>Tyre Health Inspection [Rear - Left]</td><td>"+lastRowValue[0][23]+"<td></tr></table></div>";


var brake_pad_section="<div class='section'><h2>🛠️  Brake Pad Inspection and Engine Size</h2><table><tr><th>Check</th><th>Result</th></tr><tr><td>Brake Pad Inspection [Front - Right]</td><td>"+lastRowValue[0][25]+"</td></tr><tr><td>Brake Pad Inspection [Front - Left]</td><td>"+lastRowValue[0][26]+"</td></tr><tr><td>Brake Pad Inspection [Rear - Right]</td><td>"+lastRowValue[0][27]+"</td></tr><tr><td>Brake Pad Inspection [Rear - Left]</td><td>"+lastRowValue[0][28]+"</td></tr><tr><td>Engine Size</td><td>"+lastRowValue[0][37]+"</td></tr></table></div>";


var lights_inspection_section ="<div class='section'><h2>💡  Lights Inspection</h2><table><tr><th>Check</th><th>Result</th></tr><tr><td>Lights Inspection [Front - Right]</td><td>"+lastRowValue[0][31]+"</td></tr><tr><td>Lights Inspection [Front - Left]</td><td>"+lastRowValue[0][32]+"</td></tr><tr><td>Lights Inspection [Rear - Right]</td><td>"+lastRowValue[0][33]+"</td></tr><tr><td>Lights Inspection [Rear - Left]</td><td>"+lastRowValue[0][34]+"</td></tr><tr><td>Lights Inspection [Right Brake Light]</td><td>"+lastRowValue[0][35]+"</td></tr><tr><td>Lights Inspection [Left Brake Light]</td><td>"+lastRowValue[0][36]+"</td></tr></table></div>";


var fire_extinguisher_section="<div class='section'><h2>🧯  Fire Extinguisher Availability</h2><table><tr><th>Check</th><th>Result</th></tr><tr><td>Fire Extinguisher availability</td><td>"+lastRowValue[0][12]+"</td></tr></table></div>";


var result_top_section ="<div class='section'><h2>Result of the Inspection</h2><table><tr><th class='result2'>Report</th><th class='result2'>Result</th></tr>"

var result_end_section="</table></div></div></body></html>";




var mileageReport = lastRowValue[0][57];
var tyreReport=lastRowValue[0][58]
var tyrePSIReport = lastRowValue[0][59];
var fireExtinguisherStatus= lastRowValue[0][60];
var batteryHealthStatus= lastRowValue[0][61];
var brakePadStatus=lastRowValue[0][62];
Logger.log("BRAKE PAD"+brakePadStatus);
var testarray = [];



// testarray.push(EmailBody);
var Conclusion = result_top_section;
testarray.push(Conclusion);
if(mileageReport!=""&& mileageReport!=null)
{Conclusion= "<tr><td>Mileage Report</td><td style='color:red;font-weight:700'>"+mileageReport+"</td></tr>";

// testarray.push(mileageReport+"<br><br>");
}
if(tyreReport!=""&& tyreReport!=null)
{Conclusion= Conclusion+ "<tr><td>Tyre Report</td><td style='color:red;font-weight:700'>"+tyreReport+"</td></tr>";

// testarray.push(tyreReport+"<br><br>");
}

if(tyrePSIReport!=""&& tyrePSIReport!=null)
{Conclusion= Conclusion+ "<tr><td>Tyre PSI Report</td><td style='color:red;font-weight:700'>"+ tyrePSIReport+"</td></tr>";

// testarray.push(tyrePSIReport+"<br><br>");
}

if(fireExtinguisherStatus!=""&& fireExtinguisherStatus!=null)
{Conclusion= Conclusion+ "<tr><td>Fire Extinguisher Report</td><td style='color:red;font-weight:700'>"+fireExtinguisherStatus+"</td></tr>";
// testarray.push(fireExtinguisherStatus+"<br><br>");
}

if(batteryHealthStatus!=""&& batteryHealthStatus!=null)
{Conclusion= Conclusion+"<tr><td>Battery Health Report</td><td style='color:red;font-weight:700'>"+ batteryHealthStatus+"</td></tr>";

// testarray.push(batteryHealthStatus+"<br><br>");
}

if(brakePadStatus!=""&& brakePadStatus!=null)
{Conclusion= Conclusion+"<tr><td>Brake Pad Health Report</td><td style='color:red;font-weight:700'>"+ brakePadStatus+"</td></tr>";

// testarray.push(brakePadStatus)+"<br><br>";
}

// var finalEmailBody = EmailBody+Conclusion;

// Logger.log(finalEmailBody);

var abcde = testarray.toString().replace(","," ");
// Logger.log(testarray);

Conclusion = Conclusion + result_end_section;






var finalResultEmail = header + logo + minor_section+battery_section+tyre_psi_health_section+brake_pad_section+lights_inspection_section+fire_extinguisher_section + Conclusion;

// var abc = EmailBody+Conclusion;

// Logger.log(abc);

Logger.log(Conclusion);
// Logger.log("last :" +lastRowValue[0][59]);

 var email = lastRowValue[0][46];
// Logger.log(EmailBody);
// For Multiple recipients
// var bcc1and2 = "xyz@example.com,abc@example.com";
 Utilities.sleep(2000);
    // GmailApp.sendEmail(email,subject,"",{'bcc':slackEmail, htmlBody:abc});


sendToMicrosoftTeams();

sendEmail(email,finalResultEmail);



SpreadsheetApp.flush();
}




function sendEmail(emailer,finalResultEmail) {
  Logger.log(emailer);
  var apiKey = "IT8v_QOHVOILKxYITiIluw";
  // var recipientEmail = "ali.sorathiya@cafu.com";
  var recipientEmail = emailer;
  var subject = "CAFU - Vehicle Inspection Report";
  var messageText = "This is the plain text message content.";
  var messageHTML = finalResultEmail;
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      key: apiKey,
      message: {
        html: messageHTML,
        text: messageText,
        subject: subject,
        from_email: "vehicleinspection@cafu.com",
        from_name: "CAFU - Vehicle Inspection Report",
        to: [{ email: recipientEmail, type: "to" }, { email: slackEmail, type: "bcc" } ],
        important: false,
        track_opens: false,
        track_clicks: false,
        auto_text: false,
        auto_html: false,
        inline_css: false,
        url_strip_qs: false,
        preserve_recipients: false,
        view_content_link: false,
        bcc_address: "",
        tracking_domain: "",
        signing_domain: "",
        return_path_domain: "",
        merge: false,
        merge_language: "mailchimp",
        global_merge_vars: [],
        merge_vars: [],
        tags: [],
        // subaccount: "",
        google_analytics_domains: [],
        google_analytics_campaign: "",
        metadata: { website: "" },
        recipient_metadata: [],
        attachments: [],
        images: []
      },
      async: false,
      ip_pool: "",
      send_at: ""
    })
  };
  
  var response = UrlFetchApp.fetch("https://mandrillapp.com/api/1.0/messages/send", options);
  
  Logger.log(response.getContentText()); // Log the response for debugging
}





function sendToMicrosoftTeams() {
  var webhookUrl = 'https://menaenergydxb.webhook.office.com/webhookb2/df4787cf-38db-4ba4-872d-892e11d58605@b7ddebaa-edc5-4863-8053-72604d1dcf76/IncomingWebhook/92ba869ebaa3442cab38ed321eaceb80/5e4ad654-cfdd-43a2-8b6c-0c558b056241';
  var message = {
    text: "Inspection Complete",
  };
  var payload = JSON.stringify(message);

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload
  };

  var response = UrlFetchApp.fetch(webhookUrl, options);

  if (response.getResponseCode() == 200) {
    Logger.log('Message sent successfully.');
  } else {
    Logger.log('Error sending message. Response code: ' + response.getResponseCode());
  }
}






// <!DOCTYPE html>
// <html>

// <head>
//     <meta name='viewport' content='width=device-width,initial-scale=1'>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 0
//         }

//         .header {
//             background-color: #4FC4CD;
//             color: #fff;
//             text-align: center;
//             padding: 15px;
//             font-size: 24px;
//             margin-bottom: 0;
//             padding-bottom: 1px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, .2)
//         }

//         .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 0;
//             background-color: #fff;
//             border-radius: 5px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, .1)
//         }

//         .section {
//             margin: 10px 0;
//             padding: 20px;
//             background-color: #fff;
//             border-radius: 5px
//         }

//         .section h2 {
//             color: #4FC4CD;
//             font-size: 20px;
//             margin: 0 0 10px;
//             padding: 0;
//             display: flex;
//             align-items: center
//         }

//         .result {
//             color: #4FC4CD;
//             font-weight: 700
//         }

//         .result-pass {
//             color: #090
//         }

//         .result-fail {
//             color: red
//         }

//         table {
//             width: 100%;
//             border-collapse: collapse;
//             border-spacing: 0
//         }

//         td,
//         th {
//             text-align: left;
//             padding: 8px
//         }

//         th {
//             background-color: #4FC4CD;
//             color: #fff
//         }
        
//         .result2 {
//         background-color: orange;
//         }
        
//         .header-text {
//             text-align: left;
//             font-size: 22px;
//             font-weight: bold;
//             margin-top: 60px;
//             margin-left: 30px;
//             margin-right: 30px;


//         }

//         .header-paragraph {
//             margin-left: 30px;
//             margin-right: 30px;
//             text-align: left;
//             font-size: 18px;
//             font-weight: 400;
//             margin-top: 50px;
//         }
        
//     </style>
// </head>

// <body>
//     <div class='container'>
//         <div class='header'><img src='https://www.cafu.com/wp-content/themes/cafu/images/cafu-logo-white.svg'
//                 alt='CAFU Logo' style='width:300px'>
//             <h3 style='font-weight:700'>Free Vehicle Health Inspection Report</h3>
//         </div>
        
//         <p class="header-text">
//                 Hello lastRowValue[0][45],
//             </p>
//             <p class="header-paragraph">
//                 Thank you for choosing CAFU for your recent car check-up appointment. We are committed to guaranteeing
//                 your vehicle's optimal performance and safety, and we appreciate your trust in us.
//             </p>
//             <p class="header-paragraph">
//                 Please find below your order details, check-up summary and detailed vehicle service report:
//             </p>
//         <div class='section'>
//             <h2>🚗 Car Details</h2>
//             <table>
//                 <tr>
//                     <th>Car Attributes</th>
//                     <th>Value</th>
//                 </tr>
//                 <tr>
//                     <td>VIN Number</td>
//                     <td>lastRowValue[0][2]</td>
//                 </tr>
//                 <tr>
//                     <td>Mileage</td>
//                     <td>lastRowValue[0][4] Kms</td>
//                 </tr>
//                 <tr>
//                     <td>Next Mileage</td>
//                     <td>lastRowValue[0][5] Kms</td>
//                 </tr>
//                 <tr>
//                     <td>Vehicle Make</td>
//                     <td>lastRowValue[0][48]</td>
//                 </tr>
//                 <tr>
//                     <td>Vehicle Model</td>
//                     <td>lastRowValue[0][49]</td>
//                 </tr>
//                 <tr>
//                     <td>Vehicle Number Plate</td>
//                     <td>lastRowValue[0][51]</td>
//                 </tr>
//                 <tr>
//                     <td>Vehicle Number Plate Emirati</td>
//                     <td>lastRowValue[0][52]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>🔧 Minor Service</h2>
//             <table>
//                 <tr>
//                     <th>Service</th>
//                     <th>Result</th>
//                 </tr>
               
//                 <tr>
//                     <td>Oil grade check-up</td>
//                     <td>lastRowValue[0][7]</td>
//                 </tr>
//                 <tr>
//                     <td>Engine coolant levels</td>
//                     <td>lastRowValue[0][8]</td>
//                 </tr>
//                 <tr>
//                     <td>Steering Fluid levels</td>
//                     <td>lastRowValue[0][9]</td>
//                 </tr>
//                 <tr>
//                     <td>Washer fluid levels</td>
//                     <td>lastRowValue[0][10]</td>
//                 </tr>
//                 <tr>
//                     <td>Wiper blade check-up</td>
//                     <td>lastRowValue[0][11]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>🔋 Battery</h2>
//             <table>
//                 <tr>
//                     <th>Check</th>
//                     <th>Result</th>
//                 </tr>
//                 <tr>
//                     <td>Battery Health</td>
//                     <td>lastRowValue[0][14]+"%</td>
//                 </tr>
//                 <tr>
//                     <td>Battery Make</td>
//                     <td>lastRowValue[0][15]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>🛞 Tyre PSI and Health</h2>
//             <table>
//                 <tr>
//                     <th>Check</th>
//                     <th>Result</th>
//                 </tr>
//                 <tr>
//                     <td>Front Right Tyre PSI</td>
//                     <td>lastRowValue[0][16]</td>
//                 </tr>
//                 <tr>
//                     <td>Front Left Tyre PSI</td>
//                     <td>lastRowValue[0][17]</td>
//                 </tr>
//                 <tr>
//                     <td>Back Right Tyre PSI</td>
//                     <td>lastRowValue[0][18]</td>
//                 </tr>
//                 <tr>
//                     <td>Back Left Tyre PSI</td>
//                     <td>lastRowValue[0][19]</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre Health Inspection [Front - Right]</td>
//                     <td>lastRowValue[0][20]</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre Health Inspection [Front - Left]</td>
//                     <td>lastRowValue[0][21]</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre Health Inspection [Rear - Right]</td>
//                     <td>lastRowValue[0][22]</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre Health Inspection [Rear - Left]</td>
//                     <td>lastRowValue[0][23]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>🛠️ Brake Pad Inspection and Engine Size</h2>
//             <table>
//                 <tr>
//                     <th>Check</th>
//                     <th>Result</th>
//                 </tr>
//                 <tr>
//                     <td>Brake Pad Inspection [Front - Right]</td>
//                     <td>lastRowValue[0][25]</td>
//                 </tr>
//                 <tr>
//                     <td>Brake Pad Inspection [Front - Left]</td>
//                     <td>lastRowValue[0][26]</td>
//                 </tr>
//                 <tr>
//                     <td>Brake Pad Inspection [Rear - Right]</td>
//                     <td>lastRowValue[0][27]</td>
//                 </tr>
//                 <tr>
//                     <td>Brake Pad Inspection [Rear - Left]</td>
//                     <td>lastRowValue[0][28]</td>
//                 </tr>
//                 <tr>
//                     <td>Engine Size</td>
//                     <td>lastRowValue[0][37]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>💡 Lights Inspection</h2>
//             <table>
//                 <tr>
//                     <th>Check</th>
//                     <th>Result</th>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Front - Right]</td>
//                     <td>lastRowValue[0][31]</td>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Front - Left]</td>
//                     <td>lastRowValue[0][32]</td>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Rear - Right]</td>
//                     <td>lastRowValue[0][33]</td>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Rear - Left]</td>
//                     <td>lastRowValue[0][34]</td>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Right Brake Light]</td>
//                     <td>lastRowValue[0][35]</td>
//                 </tr>
//                 <tr>
//                     <td>Lights Inspection [Left Brake Light]</td>
//                     <td>lastRowValue[0][36]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>🧯 Fire Extinguisher Availability</h2>
//             <table>
//                 <tr>
//                     <th>Check</th>
//                     <th>Result</th>
//                 </tr>
//                 <tr>
//                     <td>Fire Extinguisher availability</td>
//                     <td>lastRowValue[0][12]</td>
//                 </tr>
//             </table>
//         </div>
//         <div class='section'>
//             <h2>Result of the Inspection</h2>
//             <table>
//                 <tr>
//                     <th class="result2">Report</th>
//                     <th class ="result2">Result</th>
//                 </tr>
//                 <tr>
//                     <td>Mileage Report</td>
//                     <td>lastRowValue[0][57]</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre Report</td>
//                     <td>Needs Tyre Change</td>
//                 </tr>
//                 <tr>
//                     <td>Tyre PSI Report</td>
//                     <td>Tyre PSI Top Up Required</td>
//                 </tr>
//                 <tr>
//                     <td>Fire Extinguisher</td>
//                     <td>Fire Extinguisher Expiry Status:<span class='battery-change'
//                             style='color:red;font-weight:700'>Expired</span></td>
//                 </tr>
//                 <tr>
//                     <td>Battery Status</td>
//                     <td>Battery Health: 49%<span class='battery-change' style='color:red;font-weight:700'>[Battery
//                             Change Needed]</span></td>
//                 </tr>
//                 <tr>
//                     <td>Brake Pad Status</td>
//                     <td style='color:red;font-weight:700'>Major Service Required</td>
//                 </tr>
//             </table>
//         </div>
//     </div>
// </body>

// </html>









