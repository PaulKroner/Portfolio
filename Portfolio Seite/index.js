// Kontakt E-Mail

const contact = document.getElementById("contactme");
contact.addEventListener("click", function () {
  window.open('mailto:test@example.com');
});


// fade in Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


// popup öffnen
// function openPopup() {
//   var popup = document.getElementById("popupID");
//   popup.classList.add("active");
// }

// var popup = document.getElementById("popupID");
// var popupButton = document.getElementById("popup-button");
// $(document).click(function(e) {
//   let $target = $(e.target);


//   if(document.querySelector(".popup-button").contains(e.target)) {
//     // warum auch immer muss das drin bleiben
//   }
//   else if(!(document.querySelector(".popup-button").contains(e.target)) || !(document.querySelector(".popup").contains(e.target))) {
//     popup.classList.remove("active");
//   }

// });

// Loader Animation
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#page-loader").style.visibility = "visible";
  } else {
    document.querySelector(
      "#page-loader").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
    document.querySelector(
      "#page-loader-center").classList.remove("center");
  }
};