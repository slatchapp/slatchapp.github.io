var initialrun = function() {
  var c = document.getElementById("appcanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#EDDBFF";
  ctx.fillRect(0,0,600,100);
  ctx.font = "30px Sans Serif"
  ctx.strokeText(50,50,"Slatch")
}
