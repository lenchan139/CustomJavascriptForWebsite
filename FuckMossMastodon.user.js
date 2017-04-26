// ==UserScript==
// @name         Fuck The Moss Off for Mastodon
// @namespace    https://lenchan139.org/
// @version      0.1
// @description  Remember change the (at)match for your Mastodon domain.
// @author       Len Chan
// @match 	https://sns.lenchan139.org/*
// @grant        none
// ==/UserScript==
function clickMoss() {

var x = document.getElementsByClassName("media-spoiler");
x[0].click();
}

(function() {
setInterval(clickMoss,1);
      
})();
