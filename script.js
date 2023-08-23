gsap.registerPlugin(ScrollTrigger);

let t2 = gsap.timeline();
t2.set(".underline", {autoAlpha:0})
    .to(".underline", {autoAlpha:1, duration:3})
    .to(".underline", {autoAlpha:0});

var tl = gsap.timeline();
tl.set(".hero-hello", {autoAlpha: 1, x: 50}, 0)
    .set(".hero-my-name", {autoAlpha: 0}, 0)
    .set(".hero-text", {autoAlpha: 0, scale: 0.5}, 0)
    .set(".hero-statement .word", {autoAlpha: 0 , x: 300}, 0)
    .to(".hero-hello", { x: 0, duration: 0.5}, 1)
    .to(".hero-my-name", {autoAlpha: 1, duration: 1})
    .to(".hero-text", {scale: 1, autoAlpha: 1, duration: .5, ease: "Back.easeOut"}, 1.7)
    .to(".hero-statement .word", {x: 0, autoAlpha: 1, duration: 2, ease: "Elastic.easeOut", stagger: .1 }, "+=1")
    .add(t2)
    .play();


     

// Project title
gsap.to(".projects-title", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top center",
        end: "bottom bottom",
        markers: false,
        toggleActions: "play none play reverse"
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "Power2.out"
});

// About title
gsap.to(".about-title", {
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "center 500px",
        markers: false,
        toggleActions: "play none none reverse"
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease:"Power2.easeOut"
});

// About icon
gsap.to(".about-icon", {
    scrollTrigger: {
        trigger: ".about-icon",
        start: "top center",
        end: "bottom 500px",
        markers: false,
        toggleActions: "restart reverse restart reverse"
    }, // start the animation when ".box" enters the viewport (once)
    backgroundSize: "150%",
    duration: 1,
    ease:"Power2.easeOut"
});

// Tech title
gsap.to(".tech-heading-title", {
    scrollTrigger: {
        trigger: ".tech",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease:"Power2.easeOut"
});
        
/*window.onscroll = function() {myFunction()};

var projects = document.querySelectorAll("section.project");
let projectsTitle = document.getElementById("projects-title");
var sticky = projects[0].offsetTop;
let stickyEnd = projects[projects.length - 1].offsetTop;

function myFunction() {
    //console.log("sticky " + sticky)
    //console.log("stickyEnd " + stickyEnd) 
    //console.log("window" + window.pageYOffset)
    
    if (window.pageYOffset > sticky && window.pageYOffset <= stickyEnd) {
        projectsTitle.classList.add("sticky");
    } else {
        projectsTitle.classList.remove("sticky");
    }
}*/