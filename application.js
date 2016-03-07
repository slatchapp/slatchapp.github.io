var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).start(function(){
  var c = document.getElementById("appcanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF00FF";
  ctx.fillRect(0,0,100,100);
)};
