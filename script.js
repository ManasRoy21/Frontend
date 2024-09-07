function locomotiveAnimation()
{
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}


function loadingAnimation() {
    var t1 = gsap.timeline();

    t1.from("#line1 h1", {
        y: 150,
        stagger: 0.35,
        duration: 0.6,
        delay: 0.5
    });
    
    t1.from("#line1-part1,#line1 h2", {
        opacity: 0,
        onStart: function() {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function() {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    grow = 100;
                    h5timer.innerHTML = grow;
                }
            }, 20);
        }
    });
    
    t1.to("#line1 h2", {
        animationName: "anime",
        opacity: 1
    });
    
    t1.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2,
        onComplete: function() {
            document.querySelector("#loader").style.display = "none";
        }
    });

    t1.from("#page1", {
        delay: 0.1,
        y: 1900,
        opacity: 0,
        duration: 0.6,
        ease: Power4.easeOut
    });
    t1.from("#nav",{
        opacity:0,
        y:120,
        stagger:0.2
    })
    t1.from(".hero1,.hero2,.hero3,.hero4",{
        opacity:0,
        y:120,
        stagger:0.2
    })
}

loadingAnimation();

// locomotiveAnimation();


// function mousemov(){
//     document.addEventListener("mousemove", function(dets) {
//         gsap.to("#crsr",{
//             left: dets.x ,
//             top: dets.y ,
//             duration: 0.1,
//             ease: "power1.out"
//         });
//     });
// }
// mousemov();


  function magnet(){
    Shery.makeMagnet("#nav-part2 h4", {
       
      });
  }
  magnet()
  function SheryAnimation() {
    Shery.imageEffect(".images", {
        style: 6,
        // debug:true,
        gooey: true,
        config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }
    })

}

function cursoranimation()
{
    // Get the element by ID
const crsrElement = document.getElementById('crsr');

// Apply the mouse follower effect to the crsr element without easing
Shery.mouseFollower("#crsr",{
    skew: false,
    ease: "cubic-bezier(0.23,1,0.320,1)",
    duration: 1,
});

    Shery.makeMagnet("#nav-part2 h4");
}

function page2Animation() {

    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to("#crsr", {
            opacity: 0
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to("#crsr", {
            opacity: 1
        })

        gsap.to("#play-btn", {
            left: "70%",
            top: "-15%"
        })
    });

    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")

    var flag = 0

    videoC.addEventListener("click", function () {
        if (flag == 0) {

            gsap.to(videoVideo, {
                opacity: 1
            })

            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        } else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'

            videoVideo.pause()
            flag = 0
        }
    })

    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 555,
            top: dets.y - 200
        })
    })
}

page2Animation()

SheryAnimation()
cursoranimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",
    {
        x:dets.x,
        y:dets.y
    })
})

document.querySelector(".hero3").addEventListener("mouseenter",
    function()
    {
        gsap.to("#flag",{
            opacity:1
        })
    }
)
document.querySelector(".hero3").addEventListener("mouseleave",function
    (){
        gsap.to("#flag",{
            opacity:0
        })
    }
)
// footer
var footerText = document.querySelector("#footer-text")

footerText.addEventListener("mouseenter",function(){
    gsap.to("#footer h1 span",{
        opacity:0,
        stagger:0.1,
        duration:0.5
    })
    gsap.to("#footer h2 span",{
        opacity:1,
        delay:0.4,
        duration:0.5,
        stagger:0.1
    })
})

footerText.addEventListener("mouseleave",function(){
    gsap.to("#footer h2 span",{
        opacity:0,
        stagger:0.05,
        duration:0.3
    })
    gsap.to("#footer h1 span",{
        opacity:1,
        delay:0.4,
        duration:0.3,
        stagger:0.05
    })
})
