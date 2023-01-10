let animateBtn = document.getElementById("btn");

animateBtn.onclick = function () {
  let position = 0;
  let box = document.getElementById("box");
  let interval = setInterval(animation, 5);

  //inner func will animate box
  function animation() {
    if (position == 400) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
      box.style.top = position + "px";
    }
  }
};
