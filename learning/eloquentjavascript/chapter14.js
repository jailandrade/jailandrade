var first_button = document.querySelector("#first-button");
first_button.addEventListener("click", function(){
  alert("Button clicked");
});

var second_button = document.querySelector("#second-button");
function once(){
  alert("Done!");
  second_button.removeListener("click", once);
}
second_button.addEventListener("click", once);

var third_button = document.querySelector("#third-button");
third_button.addEventListener("mousedown", function(event){
  if(event.which == 1)
    console.log("Left button")
  else if(event.which == 2)
    console.log("Middle button")
  else if(event.which == 3)
    console.log("Right button")
});

var p = document.querySelector("#second-paragraph");
var button = document.querySelector("#forth-button");
p.addEventListener("mousedown", function(){
  console.log("Handler for paragraph");
})
button.addEventListener("mousedown", function(event){
  console.log("Handler for button");
  if(event.which == 3)
    event.stopPropagation();
})

document.body.addEventListener("click", function(event){
  if (event.target.nodeName == "BUTTON")
    console.log("Clicked", event.target.textContent);
});

var link = document.querySelector("#first-link");
link.addEventListener("click", function(event){
  console.log("Nope");
  event.preventDefault();
});

addEventListener("keydown", function(event){
  if(event.keyCode == 74)
    document.body.style.background = "violet";
});

addEventListener("keyup", function(event){
  if(event.keyCode == 74)
    document.body.style.background = "";
});

addEventListener("keydown", function(event){
  if(event.keyCode == 32 && event.ctrlKey)
    console.log("Continuing!");
});

addEventListener("keypress", function(event){
  console.log(String.fromCharCode(event.charCode));
});

addEventListener("click", function(event){
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.querySelector(".area").appendChild(dot);
})


var lastX; // Tracks the last observed mouse X position
var rect = document.querySelector(".orange");
rect.addEventListener("mousedown", function(event){
  if (event.which == 1) {
    lastX = event.pageX;
    addEventListener("mousemove", moved);
    event.preventDefault();
  }
});

function buttonPressed(event){
  if (event.buttons == null)
    return event.which !=0;
  else
    return event.buttons !=0;
}

function moved(event){
  if(!buttonPressed(event)){
    removeEventListener("mousemove", moved);
  } else {
    var dist = event.pageX - lastX;
    var newWidth = Math.max(10, rect.offsetWidth + dist);
    rect.style.width = newWidth + "px";
    lastX = event.pageX;
  }
}

var px = document.querySelector("#hover_paragraph");
function isInside(node, target){
  for(; node!=null; node = node.parentNode)
    if(node == target) return true;
}
px.addEventListener("mouseover", function(event){
  if(!isInside(event.relatedTarget, px))
    px.style.color = "red";
});
px.addEventListener("mouseout", function(event){
  if(!isInside(event.relatedTarget, px))
    px.style.color = "";
})
