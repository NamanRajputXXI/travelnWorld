function myFunction() {
  var y = document.getElementById("readMore");
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerText = "Read Less";
  } else {
    x.style.display = "none";
    y.innerText = "Read More";
  }
}

function hide() {
  document.getElementById("myDIV").style.display = "none";
}

// for register page
$("#chooseFile").bind("change", function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass("active");
    $("#noFile").text("No file chosen...");
  } else {
    $(".file-upload").addClass("active");
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});
