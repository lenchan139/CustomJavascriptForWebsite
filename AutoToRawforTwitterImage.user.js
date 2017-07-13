// ==UserScript==
// @name         Auto to Raw for Twitter Image
// @namespace    http://lenchan139.org/
// @version      1.1
// @description  Auto to raw for Twitter Images.
// @author       lenchan139
// @match        https://pbs.twimg.com/media/*
// @grant        none
// ==/UserScript==

(function() {
    autoToRaw();
})();
 
 function autoToRaw() {

    'use strict';

    var pattern1=window.location.href.search(/\/media\/\w+\.\w\w\w/);
    var pattern2a=window.location.href.search(/\?\w+\=\w+\&\w+\=\w+/g);
    var pattern2b=window.location.href.search(/\?\w+\=\w+/g);
    var finder1=window.location.href.search(/\?/g);
    var finder2=window.location.href.search(/\&/g);
    var finder3=window.location.href.search(/\:\w+/g);
    var finder4=window.location.href.search(/name=orig/g);
    
    var long1=window.location.href.search(/:small/);
    
    var long2=window.location.href.search(/:large/);
    
    var long3=window.location.href.search(/:orig/);
    
    
    //alert(pattern1 + "|" + finder1 + "|" + finder2 + "|" + finder3);
    
  
    //start
    //if correct, do nothing
     alert(pattern1 + "|" + pattern2a +"|" + pattern2b + "|" + finder1 + "|" + finder2 + "|" + finder3);
     if(pattern1==-1 && pattern2a!=-1 && pattern2b!=-1 && finder1!=-1 && finder2!=-1 && finder4!=-1){
         //do nothing
         alert("good!");
     }else if(pattern1!=-1 && finder1==-1 && finder2==-1 && finder3==-1){
        var arr = window.location.href.match(/\/media\/\w+\.\w\w\w/);
        var str1 = arr[0];
        var arr2 = str1.match(/\.\w\w\w/);
        var str2 = arr2[0];
        window.location.href=window.location.href.replace(str2,"?format="+str2.substring(1)+"&name=orig");
        
    }else if(pattern1!=-1 && finder1==-1 && finder2==-1 && finder3!=-1){
        
        var arr1 = window.location.href.match(/\/media\/\w+.\w\w\w\:\w+/);
        var str1 = arr1[0];
        alert(str1);
        //format
        var arr2 = str1.match(/\.\w\w\w/);
        var str2 = arr2[0];
        //size
        var arr3 = str1.match(/\:\w+/g);
        var str3 = arr3[0];
        var url = window.location.href;
        url=url.replace(str2,"?format="+str2.substring(1));
        url=url.replace(str3,"&name=orig");
        window.location.href = url;
    }else if(pattern2a!=-1 && pattern2b!=-1 && finder3==-1){
        window.location.href=window.location.href.replace(/name=\w+/g,"name=orig");   
    }else if(pattern2a==-1 && pattern2b!=-1 && finder3==-1){
        window.location.href=window.location.href + "&name=orig";  
    }
    
    
    
    
   //old
    /*
if(header!=-1 && long3!=-1){
  
}else if(long2!=-1 && header!=-1 ){

  window.location.href=window.location.href.replace(/:large/, ':orig');
}else if(long1!=-1 && header!=-1){
    
  window.location.href=window.location.href.replace(/:small/, ':orig');
}else if(long1==-1 && long2==-1 && long3==-1 && header!=-1){
    
  window.location.href=window.location.href + ':orig';
}
*/
 }
