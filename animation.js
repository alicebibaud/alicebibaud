var startTimeStamp = Date.now();

function init() {
  window.requestAnimationFrame(draw);



}

function draw() {
  
  const canvasElement = document.getElementById("canvas");
  const bb = canvasElement.getBoundingClientRect();
  const ctx = canvasElement.getContext('2d');
  canvasElement.width = Math.round(bb.width);
  canvasElement.height = Math.round(bb.height);


  //Create new canvas
  const el = document.createElement("canvas");
  el.setAttribute('display', 'None');
  document.body.appendChild(el);
  const ctx2 = el.getContext('2d');
  el.width = canvasElement.width;
  el.height = canvasElement.height;


  ctx2.fillStyle = 'pink';
  ctx2.fill();

  //ctx2.fillText()




  el.remove();


  //
  const w = canvasElement.width;
  const h = canvasElement.height;

  ctx.clearRect(0,0,w,h);

  let timeSinceInitSeconds = (Date.now() - startTimeStamp)/1000;
  let opacity = Math.min(1,timeSinceInitSeconds);
  ctx.fillStyle = "rgba(0,0,0,"+opacity+")";
  ctx.strokeStyle = "rgba(0,0,0,"+opacity+")";

  ctx.beginPath();

  ctx.arc( 100, 100, 10, 0, 3.14159265 * 2);
  ctx.fill();
  ctx.stroke();

  ctx.closePath();

  window.requestAnimationFrame(draw);
}

init();
