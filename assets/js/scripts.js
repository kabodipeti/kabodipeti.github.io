/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */

var logging = true;
var header = document.getElementById("header_to_include");



$(document).ready(function(){
  var d = new Date();
  var start = d.getTime();
  // getHTMLfromFile("../../header.html", "header_to_include", addEventListenersForHeader);
  // getHTMLfromFile("../../footer.html", "footer_to_include");
 
  // var mainContextText = getJSON("../../data/proba.json");
  // logger(mainContextText);

  // getHTMLfromFile("../../data/proba.json", "peti");
  // logger("peti: " + mainContext.cegnev);

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
  }
  if ($(window).width() >= 768){
    showElement(".mobile_menu");
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




function changeText(targetID, innerText){
  document.getElementById(targetID).innerText = innerText;
}




function logger(text){
  if (logging){
    console.log(text);
  }
}



var mainContext = {
  "cegnev": "Szabó Família Kft.",
  "telefon_kozponti": "+ 36 1 333 0302",
  "telefon_kozponti_elerhetoseg": "hétfőtől péntekig 08:00 és 17:00 óra között",
  "telefon_szerviz": "+36 1 1111 111",
  "uzletek": {
    "baross": {
      "cim": "1089 Budapest Baross utca 127",
      "tel": "232",
      "nyt_short": "H-Sz-Cs: 8:00 - 16:00, K: 8:00 – 17:00, P: 8:00 - 15:00, Sz-V: Zárva",
      "nyt_h": "08:00 - 16:00",
      "nyt_k": "08:00 - 17:00",
      "nyt_sze": "08:00 - 16:00",
      "nyt_cs": "08:00 - 16:00",
      "nyt_p": "08:00 - 15:00",
      "nyt_szo": "zárva",
      "nyt_v": "zárva"
    },
    "hegyalja": {
      "cim": "1089 Budapest Baross utca 127",
      "tel": "232",
      "nyitvatartas": "H-P 1-13:00"
    },
    "telek": {
      "cim": "1152 Budapest Telek utca 13",
      "tel": "232",
      "nyitvatartas": "H-P 1-5"
    }
  }
}

