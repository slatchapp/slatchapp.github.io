var mainbounds = function() {
  ctx.fillStyle = "#EDDBFF";
  ctx.fillRect(0,0,600,500);
  ctx.filStyle = '#FFFFFF';
  ctx.fillRect(25, 50, 575, 475);
  ctx.font = "30px Sans Serif";
  ctx.strokeText("Slatch",10,30);
}

var initialrun = function() {
  c = document.getElementById("appcanvas");
  ctx = c.getContext("2d");
  mainbounds();
}
