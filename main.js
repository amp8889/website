document.querySelector('html').className = 'js';


var p = document.querySelector('p');
var bt = document.getElementById('bt');
var input = document.getElementById("textholder").value;
//var ph = document.getElementById('ph');
var comebackText = "I get what you are saying, but, what if you are wrong? Thinks to think about."

bt.addEventListener('click', function(){

  var input = document.getElementById("textholder").value;
  //ph = comebackText;
  document.getElementById('ph').innerText = comebackText;


  console.log('PLEASE WORK')
  console.log(input);


});
