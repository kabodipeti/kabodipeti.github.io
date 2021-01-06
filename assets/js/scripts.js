/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */
var logging = true;
var header = document.getElementById("header_to_include");
window.onload = function(){
getHeader();
// header.addEventListener("load", getHeader());
}
$('*').contents().each(function() {
  if(this.nodeType === Node.COMMENT_NODE) {
    $(this).remove();
  }
});
function getHeader (){

  fetch("../../header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    logger(document.getElementById("header_to_include").tagName);
    document.getElementById("header_to_include").innerHTML = data;
  });
  logger("header betöltve");
}

function logger(text){
  if (logging){
    console.log(text);
  }
}