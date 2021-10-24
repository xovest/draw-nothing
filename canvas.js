window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //vars
  let painting = false;

  function startPos(e) {
    painting = true;
    draw(e);
  }

  function finishPos() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clintY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clintY);
  }

  //event listeners
  canvas.addEventListener('mousedown', startPos);
  canvas.addEventListener('mouseup', finishPos);
  canvas.addEventListener('mousemove', draw);
});
