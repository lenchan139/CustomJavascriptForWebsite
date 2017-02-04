// ==UserScript==
// @name         Auto to Raw for Google+ Image
// @namespace    http://lenchan139.org/
// @version      1.1
// @description  Auto to raw for Google+ Images.
// @author       lenchan139
// @match        https://*.googleusercontent.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var short=window.location.href.search(/\/\w\d+(-\w\d*)-rw\//);
    
    var long=window.location.href.search(/\/\w\d+(-\w\d*)-p-rw\//);
    
    var header=window.location.href.search(/https:\/\/lh[0-9]+.googleusercontent.com/g);
    
if(short!=-1 && header!=-1){
  window.location.href=window.location.href.replace(/\/\w\d+(-\w\d*)-rw\//, '/s0/');
}else if(long!=-1 && header!=-1 ){

  window.location.href=window.location.href.replace(/\/\w\d+(-\w\d*)-p-rw\//, '/s0/');
}else{
}

})();
