let xfocalpoint = document.body.clientWidth / 2,
  yfocalpoint = document.body.clientHeight / 2;

document.addEventListener("mousemove", event => {
  let x = event.pageX,
    y = event.pageY;
  let xmovemeter = x - xfocalpoint,
    ymovemeter = -(y - yfocalpoint);

  let movingEl = document.querySelector("#header");

  //Background changing
  let background =
    "linear-gradient(" +
    xmovemeter / 20 +
    "deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)";
  movingEl.style.backgroundImage = background;

  //Moving tings
  let rotations = `rotateX(${-(ymovemeter / yfocalpoint) / 24}turn) rotateY(${-(
    xmovemeter / xfocalpoint
  ) / 16}turn) rotateZ(${-(xmovemeter / xfocalpoint) /
    150}turn) skewX(${xmovemeter / xfocalpoint}deg)`;
  movingEl.style.transform = rotations;
});
