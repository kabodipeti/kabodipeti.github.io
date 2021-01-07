var logging = true;
var header = document.getElementById("header_to_include");
var aszfDoc = "aszf.html";
var adatKezelesDoc = "adatkezeles.html";
var arakDoc = "arak.html";

$(document).ready(function(){
  var d = new Date();
  var start = d.getTime();

  init();

  var d2 = new Date();
  var end = d2.getTime();
  var duration = end - start;
  logger("script lefutott: " + duration + " ms alatt");
  });


function getHTMLfromFile (htmlPath, targetID, callBack){ 	
  $("#" +  targetID ).load(htmlPath, callBack);
}

function getDoc(path, targetSelector){
  logger(path + " betöltbve ide " + targetSelector )
  $(targetSelector).load(path);
}
function init(){
  $("#mobile_menu_button").click(toggleMobileMenu);
  $("#aszf_button").click(toggleASZF);
  $("#adatkezeles_button").click(toggleAdatkezeles);
  $("#arak_button").click(toggleArak);
  if ($(window).width() <= 768){
    hideElement(".mobile_menu");
    showElement("#mobile_menu_button");
  }
  if ($(window).width() >= 768){
    showElement(".mobile_menu");
    hideElement("#mobile_menu_button");
  }
  hideElement("#aszf_content");
  hideElement("#adatkezeles_content");
  hideElement("#arak_content");
  removeComments();
  logger("init lefutott");
  getDoc(aszfDoc, '#aszf_content');
  getDoc(adatKezelesDoc, '#adatkezeles_content');
  getDoc(arakDoc, '#arak_content');
}

function toggleElement(selector, speed = "fast"){
  $(selector).slideToggle(speed);
  logger(selector + " kapcsolva");
}

function toggleArak(){
  toggleElement("#arak_content", "fast");
}
function toggleASZF(){
  toggleElement("#aszf_content", "fast");
}

function toggleAdatkezeles(){
  toggleElement("#adatkezeles_content", "fast");
}

function toggleMobileMenu(){
  toggleElement(".mobile_menu","fast");
    // $(".mobile_menu").slideToggle("fast");
    // logger("mobilos menü toggle");
}

function hideElement(selector, speed = null){
  $(selector).hide(speed);
  logger( selector + " elrejtve");
}
function showElement(selector, speed = null){
  $(selector).show(speed);
  logger( selector + " megjelenítve");
}
/* kommentek eltávolítása */
function removeComments(){
  $('*').contents().each(function() {
    if(this.nodeType === Node.COMMENT_NODE) {
      $(this).remove();
    }
  });
}

function logger(text){
  if (logging){
    console.log(text);
  }
}
