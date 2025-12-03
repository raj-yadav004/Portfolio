let typed = new Typed("#profession", {
    strings: ["Web Developer", "Graphic Designer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("#nav");
const navlinks = document.querySelectorAll('#nav a');

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('active');
    
    const icon = hamburger.querySelector('i');
    if(nav.classList.contains('active')){
        icon.classList.remove('bx-menu-alt-left');
        icon.classList.add('bx-x');
    }
    else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu-alt-left');
    }
});

navlinks.forEach(link => {
    
    link.addEventListener("click",()=>{
        nav.classList.remove('active'); 
        const icon = hamburger.querySelector('i'); 
         icon.classList.remove('bx-x');
        icon.classList.add('bx-menu-alt-left');
    });
});

document.addEventListener("click",(e)=>{
    if(!nav.contains(e.target) && !hamburger.contains(e.target)){
          nav.classList.remove('active'); 
        const icon = hamburger.querySelector('i'); 
         icon.classList.remove('bx-x');
        icon.classList.add('bx-menu-alt-left');
    }
});
