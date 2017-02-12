// ==UserScript==
// @name         Auto hide sidebar for Google+
// @namespace    http://lenchan139.org/
// @version      1.1
// @description  Auto to raw for Twitter Images.
// @author       lenchan139
// @match        https://plus.google..com/*
// @grant        none
// ==/UserScript==

var a = 0;
window.addEventListener('load', function() {
waitForKeyElements (".mUbCce.p9Nwte", clickTargetButton);
}, false);

function clickTargetButton (jNode) {
    if(a===0){
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('click', true, true);
    jNode[0].dispatchEvent (clickEvent);
    a = 1;
    //document.getElementByClassName(".mUbCce.p9Nwte");
    }
}
