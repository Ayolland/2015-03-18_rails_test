var position = 0;

// window.onload = function() {
//   window.setInterval(moveBg, 30);
// };

function moveBg() {
  position++;
  if (position > 190){ position = 0 };
  var pos_string = position + "px";
  document.body.style.backgroundPosition = pos_string + " -" + pos_string
}