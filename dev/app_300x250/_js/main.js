function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	

	TweenLite.to(".bg", 12, {x:-1320, y:-10})

	tl.from(".t1", .3, {opacity:0, y:"+=20", ease:Power3.easeOut}, "+=.2")


	tl.add("f1-end", "+=3")
	tl.to(".t1", .1, {opacity:0, ease:Power3.easeOut}, "f1-end")


	tl.add("f2", "+=.2")
	tl.from(".t2", .3, {opacity:0, y:"+=20", ease:Power3.easeOut}, "f2")
	tl.from(".overhang", .5, {scale:0, ease:Back.easeOut}, "f2")
	tl.from(".screen_blue", .5, {y:"+=200", ease:Power3.easeOut}, "f2")
	tl.from(".cart", .5, {y:"+=200", ease:Power3.easeOut}, "f2")


	tl.add("f2-end", "+=3")
	tl.to(".t2", .1, {opacity:0, ease:Power3.easeOut}, "f2-end")
	tl.to(".cart", .1, {opacity:0, ease:Back.easeOut}, "f2-end")

	tl.add("f3", "+=.2")
	tl.from(".t3", .3, {opacity:0, ease:Power3.easeOut}, "f3")
	tl.from(".buy", .5, {scale:0, ease:Back.easeOut}, "f3")

	tl.add("f3-end", "+=2.2")
	tl.to(".t3", .3, {opacity:0, ease:Power3.easeOut}, "f3-end")
	tl.to([".phone_1", ".overhang", ".screen_blue", ".buy"], .5, {y:"+=200", ease:Back.easeOut}, "f3-end")


	tl.add("f4", "+=.2")
	tl.from(".phone_2", .3, {y:"+=250", ease:Power3.easeOut})
	tl.from(".card", .6, {y:"+=250", x:"-100", opacity:0, ease:Power3.easeOut})
	tl.from(".app", .3, {opacity:0, ease:Power3.easeOut})
	tl.from(".cta", .3, {opacity:0, y:"+=50", ease:Power3.easeOut}, "+=1")

	// tl.gotoAndPlay("f3-end")
}

start()


module.exports = {};

