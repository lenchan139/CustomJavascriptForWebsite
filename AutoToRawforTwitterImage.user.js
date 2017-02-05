// ==UserScript==
// @name         Auto to Raw for Twitter Image
// @namespace    http://lenchan139.org/
// @version      1.1
// @description  Auto to raw for Twitter Images.
// @author       lenchan139
// @match        https://pbs.twimg.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var header=window.location.href.search(/\/media\/\w+.\w\w\w/g);
    
    var long1=window.location.href.search(/:small/);
    
    var long2=window.location.href.search(/:large/);
    
    var long3=window.location.href.search(/:orig/);
    
    
if(header!=-1 && long3!=-1){
  
}else if(long2!=-1 && header!=-1 ){

  window.location.href=window.location.href.replace(/:large/, ':orig');
}else if(long1!=-1 && header!=-1){
    
  window.location.href=window.location.href.replace(/:small/, ':orig');
}else if(long1==-1 && long2==-1 && long3==-1 && header!=-1){
    
  window.location.href=window.location.href + ':orig';
}

})();
