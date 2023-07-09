function zoomIn() {
  var body = document.querySelector('body');
  var currentZoom = parseInt(window.getComputedStyle(body).zoom) || 100;
  var newZoom = currentZoom + 10;
  body.style.zoom = newZoom + '%';
}

function zoomOut() {
  var body = document.querySelector('body');
  var currentZoom = parseInt(window.getComputedStyle(body).zoom) || 100;
  var newZoom = currentZoom - 10;
  body.style.zoom = newZoom + '%';
}
