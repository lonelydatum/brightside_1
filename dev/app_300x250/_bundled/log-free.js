(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	TweenLite.to(".bg", 16, { x: -1320, y: -10 });

	tl.from(".t1", .5, { opacity: 0, y: "+=20", ease: Power3.easeOut }, "+=.2");

	tl.add("f1-end", "+=2.6");
	tl.to(".t1", .3, { opacity: 0, ease: Power3.easeOut }, "f1-end");

	tl.add("f2", "+=.2");
	tl.from(".t2", .3, { opacity: 0, y: "+=20", ease: Power3.easeOut }, "f2");
	tl.from(".overhang", .5, { scale: 0, ease: Back.easeOut }, "f2");
	tl.from(".screen_blue", .5, { y: "+=200", ease: Power3.easeOut }, "f2");
	tl.from(".cart", .5, { y: "+=200", ease: Power3.easeOut }, "f2");
	tl.from(".cart_4", .3, { scale: 0, ease: Back.easeOut }, "+=.1");

	tl.add("f2-end", "+=3");
	tl.to(".t2", .3, { opacity: 0, ease: Power3.easeOut }, "f2-end");
	tl.to([".cart", ".cart_4"], .1, { opacity: 0, ease: Back.easeOut }, "f2-end");

	tl.add("f3", "+=.2");
	tl.from(".t3", .3, { opacity: 0, ease: Power3.easeOut }, "f3");
	tl.from(".buy", .5, { scale: 0, ease: Back.easeOut }, "f3");

	tl.add("f3-end", "+=2.2");
	tl.to(".t3", .3, { opacity: 0, ease: Power3.easeOut }, "f3-end");
	tl.to([".phone_1", ".overhang", ".screen_blue", ".buy"], .5, { y: "+=200", ease: Back.easeOut }, "f3-end");

	tl.add("f4", "+=.2");
	tl.from(".phone_2", .3, { y: "+=250", ease: Power3.easeOut });
	tl.from(".card", .4, { y: "+=250", x: "-70", opacity: 0, ease: Power3.easeOut });
	tl.from(".app", .3, { opacity: 0, ease: Power3.easeOut });

	// tl.gotoAndPlay("f3-end")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
