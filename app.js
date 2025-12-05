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


//smooth scrolling
const lenis = new Lenis({
    duration:1.0,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),//  smooth ease out
    wheelMultiplier: 1.1, // Control scroll speed (default is 1)
    touchMultiplier: 2,
    infinite: false

});
function raf(time){
    lenis.raf(time); 
    requestAnimationFrame(raf); 

}
requestAnimationFrame(raf); 


// ------emailjs-----

(function(){
    emailjs.init("_kmqncF81wg7A-ggw");
})();

document.getElementById("form-contact").addEventListener('submit',function(event){
    event.preventDefault(); 

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent; 
    submitBtn.textContent = 'Sending....'
    submitBtn.disabled = true; 
    

    emailjs.sendForm('service_q58fxd8','template_djlif56',this).then(function(){
            alert('Message sent sucessfully! I will get back to you soon.'); 
            document.getElementById('form-contact').reset(); 
            submitBtn.textContent = originalText; 
            submitBtn.disabled = false;
    },function(error){
        alert("Failed to send message. Please try again."); 
        console.log(error); 
        submitBtn.textContent = originalText; 
        submitBtn.disabled = false; 

    });

});