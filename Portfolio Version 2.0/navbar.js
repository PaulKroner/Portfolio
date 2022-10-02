function burgerChange(x) {
    x.classList.toggle("change");
}

const sidebar = document.querySelector('.sidebar'),
    toggle = document.querySelector('.burger');

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})