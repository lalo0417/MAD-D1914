var boxLong;
var shortBox;
var whenMouseOver = false;

document.addEventListener("DOMContentLoaded", init);

function init()
{
  boxLong = document.querySelector(".long-rect");
  boxShort = document.querySelector(".short-rect");

  boxLong.addEventListener("mouseover", onMouseover);
  boxShort.addEventListener("click", mouseClick );
  boxLong.addEventListener("mouseout", mouseOut);
};

function onMouseover()
{
  boxShort.innerHTML = "Mouse IN";
  boxLong.innerHTML= "Mouse IN";
  whenMouseOver = true; 
}

function mouseOut()
{
  boxShort.innerHTML = "Mouse OUT";
  boxLong.innerHTML = "Mouse OUT";
}

function mouseClick()
{
  if (whenMouseOver)
  {
    alert("Clickable.");
  }
}