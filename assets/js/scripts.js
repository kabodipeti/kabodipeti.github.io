/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */
var d = new Date();
var start = d.getTime();
var logging = true;
var header = document.getElementById("header_to_include");



window.onload =  function(){
  
  getHTMLfromFile("../../header.html", "header_to_include");
  getHTMLfromFile("../../footer.html", "footer_to_include");
  
  // var mainContextText = getJSON("../../data/proba.json");
  // logger(mainContextText);

  // getHTMLfromFile("../../data/proba.json", "peti");
  // logger("peti: " + mainContext.cegnev);
  document.getElementById("peti").innerText = mainContext.cegnev;
  var end = d.getTime();
  var duration = end - start;
  logger("script lefutott: " + duration + " ms alatt");
  }

function getFile(fileName){
  $.getJSON("demo_ajax_json.js", function(result){
    return result.cegnev;
  });
}
function getJSONObject(path){
  $.getJSON(path, function(data){
    logger("data12: " + data.cegnev);
    mainContext = data;
    logger("data12: " + mainContext.cegnev);
}).fail(function(){
    console.log("An error has occurred at getJSONObject.");
});
}
/* kommentek eltávolítása */
$('*').contents().each(function() {
  if(this.nodeType === Node.COMMENT_NODE) {
    $(this).remove();
  }
});


function getHTMLfromFileOld (htmlPath, targetID){

  fetch(htmlPath)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById(targetID).innerHTML = data;
  });
  logger(htmlPath + " betöltve a " + targetID + " ID-jű element-be" );
}

function getHTMLfromFile (htmlPath, targetID){ 	
  $("#" +  targetID ).load( htmlPath );
}

function changeText(targetID, innerText){
  document.getElementById(targetID).innerText = innerText;
}

function getJSON(filePath){
  var xmlhttp = new XMLHttpRequest();
  var responseText;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      responseText = this.responseText;
      var myObj = JSON.parse(responseText);
      // logger(this.responseText);
       document.getElementById("telefon").innerHTML = myObj.telefon_szerviz;
       changeText("ugyfelszolg_elerhetoseg" , myObj.uzletek.baross.nyt_short);
      return  this.responseText;
    }
  };
  xmlhttp.open("GET", filePath, true);
  xmlhttp.send();
  
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