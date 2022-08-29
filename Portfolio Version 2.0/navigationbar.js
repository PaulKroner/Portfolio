function burgerChange(x) {
    x.classList.toggle("change");
}

const sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.burger');

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

//Dark-Light-Mode
const body = document.querySelector('body'),
      modeSwitch = body.querySelector(".slider"),
      modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
