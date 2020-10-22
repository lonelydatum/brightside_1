function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	

	TweenLite.to(".bg", 13, {x:-1300, y:-45})

	
	tl.add("f1-in")
	tl.from(".can_1", .5, {x:"+=300", ease:Power3.easeOut}, "f1-in")
	tl.from(".can_2", .8, {x:"+=300", ease:Power3.easeOut}, "f1-in")
	tl.from(".t1", .3, {opacity:0, ease:Power3.easeOut})


	tl.add("f1-out", "+=2")
	tl.to(".t1", .2, {opacity:0}, "f1-out")
	tl.to(".can_1", .5, {x:"-=300"}, "f1-out")
	tl.to(".can_2", .5, {x:"-=300"}, "f1-out")

	tl.add("f2-in", "-=.3")
	tl.from(".card", .7, {x:"+=300"}, "f2-in")
	tl.from(".t2", .3, {opacity:0}, "f2-in+=.6")
	

	
	tl.add("f2-out", "+=1")
	
	tl.to(".t2", .2, {opacity:0}, "f2-out")
	


	tl.add("f3-in", "+=.1")
	
	tl.from(".sign_1", .2, {opacity:0}, "f3-in")
	tl.from(".sign_2", .2, {opacity:0}, "f3-in+=.2")
	tl.from(".t3", .3, {opacity:0}, "f3-in+=.8")

	tl.add("f3-out", "+=2.2")
	tl.to(".card", .4, {x:"-=300"}, "f3-out")
	tl.to(".t3", .2, {opacity:0}, "f3-out")
	tl.to(".sign_1", .2, {opacity:0}, "f3-out")
	tl.to(".sign_2", .2, {opacity:0}, "f3-out")

	tl.add("f4-in", "+=.1")
	tl.from(".phone_1", .3, {y:"+=250", ease:Power3.easeOut})
	tl.from(".card_2", .4, {y:"+=250", x:"-70", opacity:0, ease:Power3.easeOut})
	tl.from(".app", .3, {opacity:0, ease:Power3.easeOut})


	// tl.gotoAndPlay("f3-in")

}

start()


module.exports = {};

