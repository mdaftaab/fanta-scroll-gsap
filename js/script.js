var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}});

tl.to("#fanta",{
    top:"120%",
    left:"0%",
    rotate:"360deg",
},'orange')

tl.to("#orange",{
    top:"160%",
    left:"80%",
    rotate:"360deg"
},'orange');

tl.to("#orange-half",{
    top:"160%",
    left:"23%",
    rotate:"360deg"
},'orange');

tl.to("#leaf",{
    top:"100%",
    left:"50%",
    rotate:"359deg",
},'orange')

tl.to("#leaf2",{
    top:"100%",
    left:"0",
    rotate:"105deg",
    width:"10%",
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
}})

tl2.to("#fanta",{
    top:"212%",
    left:"30%",
    rotate:"0deg",
},'second')

tl2.to("#orange-half",{
    top:"200%",
    left:"35%",
    width:"17%",
    rotate:"180deg",
},'second')

tl2.from("#pepsi",{
    top:"200%",
    left:"0%",
    rotate:"359deg",
},'second')

tl2.to("#page3orange1",{
    bottom:"75%",
    left:"-20px",
    rotate:"360deg"
},'second')

tl2.from("#CocaCola",{
    top:"200%",
    left:"20%",
    rotate:"359deg",
},'second')

tl2.to("#page3orange2",{
    bottom:"75%",
    left:"-20px",
    rotate:"360deg"
},'second')


//for the mouse move animation...
let page1=document.querySelector(".page1");
let mouse=document.querySelector(".mouse");
page1.addEventListener("mouseenter",function(){
   gsap.to(mouse,{
    scale:1,
    opacity:1,
   })
})
page1.addEventListener("mouseleave",function(){
   gsap.to(mouse,{
    scale:0,
    opacity:0,
   })
})
page1.addEventListener("mousemove",function(dets){
   gsap.to(mouse,{
  left:dets.x-50,
  top:dets.y-50,
   })
})
