function Scroll(){
var top = document.getElementById('header');
var ypos = window.pageYOffset;
if(ypos > 100) {
top.style.height = "50px"; 
}
else{
top.style.height = "50px";
}
}
window.addEventListener("scroll",Scroll);
}