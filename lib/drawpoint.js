const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const originX = canvas.width / 2;
const originY = canvas.height / 2;

function toLeftHanded(x, y) {
  return [originX + x, originY - y];
}

function drawPoint(x, y = 0) {
  ctx.beginPath();
  ctx.arc(...toLeftHanded(x, y), 1, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}
