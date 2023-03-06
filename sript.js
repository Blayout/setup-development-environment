gsap.to(".dot", {
    y : -60,
    stagger : {
        each : 0.2,
        repeat: -1,
        yoyo : true,
    }
})

gsap.to(".shadow", {
    y : 60,
    stagger :{
        each : 0.2,
        repeat: -1,
        yoyo : true
    },
    opacity: 0.1
})

const loader = document.querySelector(".loader")
window.addEventListener("load", () => {  loader.style.display ="none"})




/* Title Script */

const myText = new SplitType('#right')

gsap.from ('.char', {
    y : 0,
    stagger: 0.10,
    delay: 0.2,
    duration : .4,
   

})
