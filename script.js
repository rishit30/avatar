// Eyes follow your mouse

let eyes = [].slice.call(document.querySelectorAll('.iris'));
const xBounds = 20; // just an arbitrary safe zone to keep the iris within so it doesn't look gross.
const yBounds = 25;

window.addEventListener('mousemove', eyeFollow);
window.addEventListener('touchmove', eyeFollow);

function eyeFollow(e) {  
  if (e.touches) { e = e.touches[0]; }
  let windowRect = document.body.getBoundingClientRect();
  
  const clamp = (val, center, diff) => {
    if (val > center + diff) return center + diff;
    else if (val < center - diff) return center - diff;
    else return val;
  };
  
  eyes.forEach((eye) => {
    eye.style.left = `${clamp(e.pageX / windowRect.width * 100, 50, xBounds).toPrecision(2)}%`;
    eye.style.top = `${clamp(e.pageY / windowRect.height * 100, 50, yBounds).toPrecision(2)}%`;
  });
}