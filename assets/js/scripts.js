var logging = true;
var header = document.getElementById("header_to_include");

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
  
function init(){
  $("#mobile_menu_button").click(toggleMobileMenu);

  if ($(window).width() <= 768){
    hideElement(".mobile_menu");
    showElement("#mobile_menu_button");
  }
  if ($(window).width() >= 768){
    showElement(".mobile_menu");
    hideElement("#mobile_menu_button");
  }
  removeComments();
  logger("init lefutott");

}

function toggleMobileMenu(){
    $(".mobile_menu").slideToggle("fast");
    logger("mobilos menü toggle");
}

function hideElement(selector){
  $(selector).hide();
  logger( selector + " elrejtve");
}
function showElement(selector){
  $(selector).show();
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
