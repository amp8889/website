import FileSaver.js

document.querySelector('html').className = 'js';


var p = document.querySelector('p');
var bt = document.getElementById('bt');
var input = document.getElementById("textholder").value;
var ph = document.getElementById('ph');
var comebackText = "I get what you are saying, but, what if you are wrong? Thinks to think about."

bt.addEventListener('click', function(){

  var input = document.getElementById("textholder").value;
  ph = comebackText;
  document.getElementById(ph).text(comebackText);


  console.log('PLEASE WORK')
  console.log(input);


});







//function getInputFromTextBox() {
//    var input = document.getElementById("textholder").value;
//    alert(input);
//}



//const file = "suggestions.txt";

//let newlink = document.createElement("a");
//newlink.download = file;

//if (window.webkitURL != null){
  //newlink.href = window.URL.createObjectURL(info);
//}
//else{
  //newlink.href = window.URL.createObjectURL(info)
  //newlink.style.display = "none";
  //document.body.appendChild(newlink);
//}

//newLink.click();
