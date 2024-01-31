
var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + "px"
    crsrb.style.left = dets.x - 100 + "px"
    crsrb.style.top = dets.y - 100 + "px"
})
var h5all = document.querySelectorAll("nav h5")
h5all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e "
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },

})
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
})
gsap.from("#aboutus img , #aboutus-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        // markers: true,
        start: "top 45%",
        end: "top 55%",
        scrub: 2,
    }
})
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 45%",
        scrub: 2,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 45%",
        scrub: 2,
    }
})

