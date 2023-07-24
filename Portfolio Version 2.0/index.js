// projectöffner
const sb = document.querySelector('#SQL-Statementbuilder'),
    games = document.querySelector('#Games');
    tools = document.querySelector('#tools');

sb.addEventListener("click" , () =>{
    window.location.href = 'projects/Statementbuilder/sb.html';
})
games.addEventListener("click" , () =>{
    window.location.href = 'projects/Games/games.html';
})
tools.addEventListener("click" , () =>{
  console.log(öffnen);
})


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
function openPopup() {
  var popup = document.getElementById("popupID");
  popup.classList.add("active");
}

var popup = document.getElementById("popupID");
var popupButton = document.getElementById("popup-button");
$(document).click(function(e) {
  let $target = $(e.target);


  if(document.querySelector(".popup-button").contains(e.target)) {
    // warum auch immer muss das drin bleiben
  }
  else if(!(document.querySelector(".popup-button").contains(e.target)) || !(document.querySelector(".popup").contains(e.target))) {
    popup.classList.remove("active");
  }

});