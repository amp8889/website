const info = document.getElementById("textholder");

const file = "suggestions.txt";

let newlink = document.createElement("a");
newlink.download = file;

if (window.webkitURL != null){
  newlink.href = window.URL.createObjectURL(info);
}
else{
  newlink.href = window.URL.createObjectURL(info)
  newlink.style.display = "none";
  document.body.appendChild(newlink);
}

newLink.click();
