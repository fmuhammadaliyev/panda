const elImg = document.getElementById("img");
document.querySelectorAll(".btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    elImg.src = `/images/${e.target.innerText}.png`;
  });
});

const elCur = document.getElementById("crsor");
document.addEventListener("mousemove", (e) => {
  elCur.style.left = e.pageX + "px";
  elCur.style.top = e.pageY + "px";
});
