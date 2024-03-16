function emailSend() {
  var mobile = document.getElementById("form2Example1").value;
  var email = document.getElementById("form2Example2").value;
  var companyName = document.getElementById("form2Example3").value;
  var travelAgencyChecked = document.getElementById("travel__agency").checked;
  var dmcChecked = document.getElementById("dmc").checked;
  var hotelChecked = document.getElementById("hotel").checked;
  var notificationChecked = document.getElementById("notification").checked;

  var messageBody =
    "Mobile: " +
    mobile +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Company Name: " +
    companyName +
    "\n" +
    "Interested in:\n" +
    (travelAgencyChecked ? "- Travel Agency\n" : "") +
    (dmcChecked ? "- DMC\n" : "") +
    (hotelChecked ? "- Hotel\n" : "") +
    "Agreed for notifications: " +
    (notificationChecked ? "Yes" : "No");

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "namanrajput329@gmail.com", // Replace with your SMTP username
    Password: "C9C1CA160AE9E32D38476C22FC047B00C8A5", // Replace with your SMTP password
    To: "namanrajput329@gmail.com", // Change this to the recipient email address
    From: "namanrajput329@gmail.com", // Change this to the email address you're authenticated with
    Subject: "Query from Travel and World",
    Body: messageBody,
  }).then((message) => alert(message));
}
