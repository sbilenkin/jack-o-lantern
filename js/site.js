
function makePumpkin() {
    var canvas = document.getElementById('thecanvas');
    var ctx = canvas.getContext('2d');
    //var x = Math.random() * 800;
    //var y = Math.random() * 600;
    var w = Math.random() * 300 + 200;
    var h = Math.random() * 200 + 150;
    canvas.width = canvas.width; 
    
    var r = Math.floor(Math.random() * 255 + 230);
    var g = Math.floor(Math.random() * 180 + 120);
    var b = Math.floor(Math.random() * 10 + 0);

    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    //ctx.fillStyle = "rgb(125,125,125)";
    drawEllipseByCenter(ctx, 400, 300, w, h);
    ctx.fill();
    
    //drawEllipseByCenter(ctx, 60,40,20,10);   
}
  
function drawEllipseByCenter(ctx, centerX, centerY, width, height) {
	
  ctx.beginPath();
  
  ctx.moveTo(centerX, centerY - height/2); // A1
  
  ctx.bezierCurveTo(
    centerX + width/2, centerY - height/2, // C1
    centerX + width/2, centerY + height/2, // C2
    centerX, centerY + height/2); // A2

  ctx.bezierCurveTo(
    centerX - width/2, centerY + height/2, // C3
    centerX - width/2, centerY - height/2, // C4
    centerX, centerY - height/2); // A1
 
  ctx.fill();
  ctx.closePath();	
}

function drawEllipse(ctx, x, y, w, h) {
  var kappa = 0.5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  //ctx.closePath(); // not used correctly, see comments (use to close off open path)
  ctx.closePath();
}
