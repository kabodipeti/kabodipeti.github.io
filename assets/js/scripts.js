/* window.setTimeout(function () {
    window.location.reload();
  }, 3000); */

/*   $(document).ready(function() {
    $('#header_to_include').load('../../header.html');
}); */

window.onload = function(){

  fetch("../../header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header_to_include").innerHTML = data;
  });

  fetch("../../head.html")
  .then(response => {
    return response.text()
  }) 
  .then(data => {
    document.querySelector("#document_head").innerHTML = data;
  });
}