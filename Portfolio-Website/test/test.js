//Navigationsleistenfunktionen
const body = document.querySelector('body'),
      modeSwitch = body.querySelector(".slider"),
      modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    alert("lol");
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

//image slider