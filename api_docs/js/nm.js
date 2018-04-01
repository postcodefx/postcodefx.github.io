/* 
 *  @PostCodeFX Postal Address API
 *  @author AQININ KINYANJUI
 *  Copyright (c) 2018. All rights reserved.
 */
var navigation_currentViewUID = "";
function displayWebPageUI(uid,defaultuid,callback){
    navigation_currentViewUID = defaultuid;    
    if(navigation_currentViewUID !== uid){
        document.getElementById(uid).style.display = "block";
        document.getElementById(navigation_currentViewUID).style.display = "none";        
        navigation_currentViewUID = uid;
    }    
    window.location.href="#"+uid;
    try{callback();}catch(e){}
   
}