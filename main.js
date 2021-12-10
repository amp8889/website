document.querySelector('html').className = 'js';


var bt = document.getElementById('bt');
var comebackText = "I get what you are saying, but, what if you are wrong? Thinks to think about.";

bt.addEventListener('click', function(){

  var input = document.getElementById("textholder").value;
  //ph = comebackText;
  document.getElementById('ph').innerText = comebackText;
  document.getElementById('opi').innerText = input;
  document.getElementById('hopi').innerText = "Unwanted Opinions and Questions";


  console.log('Testing');
  console.log(input);


});
