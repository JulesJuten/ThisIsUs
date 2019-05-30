let eersteLink = document.querySelector(".eerste a");
let tweedeLink = document.querySelector(".tweede a");
let derdeLink = document.querySelector(".derde a");
let eersteDiv = document.querySelector(".eerste");
let tweedeDiv = document.querySelector(".tweede");



eersteLink.addEventListener("click",function() {
      eersteDiv.style.transform = "translate(-90vw,0)";
      tweedeDiv.style.transform = "translate(-90vw,0)";

});

tweedeLink.addEventListener("click",function() {
      eersteDiv.style.transform = "translate(0,0)";
      tweedeDiv.style.transform = "translate(0,0)";

});
