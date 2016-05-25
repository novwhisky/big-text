var fudge = 1.05;

function resizeText(e) {
  var $txt = e.target;
  var charlen = $txt.innerText.length || 1;
  var txtArea = window.innerHeight * window.innerWidth;

  var size = (Math.sqrt(txtArea / charlen)); // * fudge
  var sizeVH = size / window.innerHeight * 100;
  $txt.style.fontSize = sizeVH + 'vh';
}
