let firstinput = document.querySelector (".firstinput");
let secondinput = document.querySelector (".secondinput");
let submitbutton = document.querySelector (".submitbutton");
let firstanswer = document.querySelector (".firstanswer");
let secondanswer = document.querySelector (".secondanswer");
let thirdanswer = document.querySelector (".thirdanswer");
let fourthanswer = document.querySelector (".fourthanswer");
let sidekick = document.querySelector (".sidekick");

submitbutton.onclick = function(){
  
  
if(firstinput.value <3 && secondinput.value.toLowerCase() === 
  "leader"){
    secondanswer.style.display = "block";}


};

submitbutton.onclick = function(){

firstanswer.style.display = "none";
secondanswer.style.display = "none";
thirdanswer.style.display = "none";
fourthanswer.style.display = "none";
sidekick.style.display = "none";
  
if(firstinput.value <3 && secondinput.value.toLowerCase() === 
  "leader"){
    secondanswer.style.display = "block";}
else if (firstinput.value <3 && secondinput.value.toLowerCase() === "teammate"){
    fourthanswer.style.display = "block";}
else if (firstinput.value >3 && secondinput.value.toLowerCase() === "leader"){
    firstanswer.style.display = "block";}
else if (firstinput.value >3 && secondinput.value.toLowerCase() === "teammate"){
    thirdanswer.style.display = "block";}
  
  else {sidekick.style.display = "block";}
};

