const hamburger =document.querySelector('#hamburger');
const menu =document.querySelector('#menu');
const hLink =document.querySelectorAll('#hLink');
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    // menu.classList.toggle("bg-white");
});

hLink.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});

