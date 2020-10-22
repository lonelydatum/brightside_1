function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	TweenLite.to(".bg", 13, {x:-635})
	

	
	tl.add("f1-in")	
	tl.from(".t1", .3, {opacity:0}, "+=.1")
	tl.from(".fun1", .1, {opacity:0}, "+=.6")
	tl.from(".fun2", .1, {opacity:0}, "+=.2")
	
	
	tl.add("f1-out", "+=2")
	tl.to(".t1", .2, {opacity:0}, "f1-out")


	tl.add("f2-in", "+=.2")

	tl.from([".t2"], .3, {opacity:0}, "f2-in")
	tl.from(".study1", .1, {opacity:0}, "+=.2")
	tl.from(".study2", .1, {opacity:0}, "+=.1")
	
	


	tl.add("f2-out", "+=2")
	tl.to(".app", .1, {opacity:0, ease:Power3.easeOut}, "f2-out")
	tl.to(".study2", .01, {opacity:0}, "+=.1")
	tl.to(".study1", .01, {opacity:0}, "+=.1")
	tl.from(".fun2", .01, {opacity:0}, "+=.1")
	tl.from(".fun1", .01, {opacity:0}, "+=.1")
	tl.from(".t2", .2, {opacity:0}, "+=.1")
	


	tl.add("f3-in", "+=.3")
	tl.from(".t3", .3, {opacity:0}, "f3-in")
	tl.from(".cta", .3, {opacity:0})
	tl.from(".legal", .3, {opacity:0})

	
	
	
	


	// tl.gotoAndPlay("f3-in")

}

start()


module.exports = {};

