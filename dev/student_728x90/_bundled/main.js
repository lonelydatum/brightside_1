(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.add("f1-in");
	tl.from(".t1", .3, { opacity: 0 }, "+=.1");
	tl.from(".fun1", .1, { opacity: 0 }, "+=.6");
	tl.from(".fun2", .1, { opacity: 0 }, "+=.2");

	tl.add("f1-out", "+=2");
	tl.to(".t1", .2, { opacity: 0 }, "f1-out");

	tl.add("f2-in", "+=.2");

	tl.from([".t2"], .3, { opacity: 0 }, "f2-in");
	tl.from(".study1", .1, { opacity: 0 }, "+=.2");
	tl.from(".study2", .1, { opacity: 0 }, "+=.1");

	tl.add("f2-out", "+=2");
	tl.to(".app", .1, { opacity: 0, ease: Power3.easeOut }, "f2-out");
	tl.to(".study2", .01, { opacity: 0 }, "+=.1");
	tl.to(".study1", .01, { opacity: 0 }, "+=.1");
	tl.from(".fun2", .01, { opacity: 0 }, "+=.1");
	tl.from(".fun1", .01, { opacity: 0 }, "+=.1");
	tl.from(".t2", .2, { opacity: 0 }, "+=.1");

	tl.add("f3-in", "+=.3");
	tl.from(".t3", .3, { opacity: 0 }, "f3-in");
	tl.from(".t4", .3, { opacity: 0 }, "+=.5");
	tl.from(".cta", .3, { opacity: 0 });
	tl.from(".legal", .3, { opacity: 0 });

	// tl.gotoAndPlay("f3-in")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
