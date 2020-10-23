function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	

	

	
	tl.add("f1-in", "+=.3")
	tl.from(".t1", .3, {opacity:0, ease:Power3.easeOut}, "f1-in")
	tl.from(".can_1", .3, {y:"+=100", ease:Power3.easeOut}, "+=.4")
	tl.from(".can_2", .3, {y:"+=100", ease:Power3.easeOut}, "-=.2")
	


	tl.add("f1-out", "+=1.8")
	tl.to(".t1", .2, {opacity:0}, "f1-out")
	tl.to(".can_1", .3, {y:"+=100"}, "f1-out")
	tl.to(".can_2", .3, {y:"+=100"}, "f1-out")

	tl.add("f2-in", "+=.3")	
	tl.from(".t2", .3, {opacity:0}, "f2-in")
	tl.from(".card", .4, {opacity:0}, "+=.3")
	

	
	tl.add("f2-out", "+=1.8")	
	tl.to(".t2", .2, {opacity:0}, "f2-out")
	


	tl.add("f3-in", "+=.1")
	tl.from(".t3", .3, {opacity:0}, "f3-in")
	tl.from(".sign_1", .2, {opacity:0}, "+=.6")
	tl.from(".sign_2", .2, {opacity:0}, "+=.2")
	tl.from(".app", .2, {opacity:0}, "+=.2")
	

	tl.add("f3-out", "+=2.2")
	tl.to(".card", .4, {opacity:0}, "f3-out")
	tl.to(".t3", .2, {opacity:0}, "f3-out")
	tl.to(".sign_1", .1, {opacity:0}, "f3-out")
	tl.to(".sign_2", .1, {opacity:0}, "f3-out")
	tl.to(".app", .2, {opacity:0}, "+=.2")

	tl.add("f4-in")	
	
	tl.from(".t4", .3, {opacity:0, ease:Power3.easeOut}, "f4-in")	
	tl.from(".t5", .3, {opacity:0}, "+=.5")	
	tl.from(".cta", .3, {opacity:0, ease:Power3.easeOut})
	tl.from(".legal", .3, {opacity:0, ease:Power3.easeOut})


	// tl.gotoAndPlay("f3-in")

}

start()


module.exports = {};

