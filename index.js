function drawLine(x1, x2) {
  for (let x = x1; x <= x2; x++) {
    drawPoint(x, 0);
  }
}

drawLine(-150, 150);
