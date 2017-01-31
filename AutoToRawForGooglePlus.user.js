// ==UserScript==
// @name         Auto to Raw for Google+ Image
// @namespace    http://lenchan139.org/
// @version      1.0
// @description  Auto to raw for Google+ Images.
// @author       lenchan139
// @match        https://*.googleusercontent.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   var t=window.location.href.search(/\/\w\d+(-\w\d*)-p-rw\//);
if(t==-1){

}else{
    window.location.href=window.location.href.replace(/\/\w\d+(-\w\d*)-p-rw\//, '/s0/');
}

})();
