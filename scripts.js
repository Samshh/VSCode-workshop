function startAnimation() {
  const box = document.getElementById("animateBox");
  let position = 0;
  const interval = setInterval(frame, 5);

  function frame() {
    if (position >= 350) {
      clearInterval(interval);
    } else {
      position++;
      box.style.top = position + "px";
      box.style.left = position + "px";
    }
  }
}

function startBounceAnimation() {
  const box = document.getElementById("animateBox");
  let position = 0;
  let direction = 1;
  const interval = setInterval(frame, 5);

  function frame() {
    if (position >= 350 || position <= 0) {
      direction *= -1;
    }
    position += direction;
    box.style.top = position + "px";
  }
}

function startFadeAnimation() {
  const box = document.getElementById("animateBox");
  let opacity = 1;
  const interval = setInterval(frame, 50);

  function frame() {
    if (opacity <= 0) {
      clearInterval(interval);
    } else {
      opacity -= 0.05;
      box.style.opacity = opacity;
    }
  }
}

function resetAnimation() {
  const box = document.getElementById("animateBox");
  box.style.top = "0px";
  box.style.left = "0px";
  box.style.opacity = "1";
}

export {
  resetAnimation,
  startAnimation,
  startBounceAnimation,
  startFadeAnimation,
};
