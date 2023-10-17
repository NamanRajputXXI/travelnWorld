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

// $("#homePage__carousel1").owlCarousel({
//   center: true,
  // autoplay: true,
//   autoplay: true,
//   stagePadding: 20,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
//   items: 1,
//   responsive: {
//     768: {
//       items: 2,
//     },
    // 480: {
    //   items: 2,
    // },
    // 320: {
    //   items: 1,
    // },
//   },
// });
// $(document).ready(function(){
//   $("#homePage__carousel1").owlCarousel({
//       center: true,
//   autoplay: true,
//   autoplay: true,
//   stagePadding: 20,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
//   items: 1,
//     responsive: {
//     768: {
//       items: 2,
//     },
//     480: {
//       items: 2,
//     },
//     320: {
//       items: 1,
//     },
//   },
   
//   });
// });

$(document).ready(function(){
  $(".owl-carousel1").owlCarousel({
    autoplay: true,
    stagePadding: 20,
    autoplayTimeout: 500,
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    loop: true,
    responsive: {
      768: {
        items: 5,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });
});
$(document).ready(function(){
  $(".owl-carousel2").owlCarousel({
    autoplay: true,
    stagePadding: 20,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    loop: true,
    responsive: {
      768: {
        items: 5,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });
});
$(document).ready(function(){
  $(".owl-carousel3").owlCarousel({
    autoplay: true,
    stagePadding: 20,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    items: 1,
    loop: true,
    responsive: {
      768: {
        items: 3,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });
});
