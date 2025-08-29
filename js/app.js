const elImg = document.getElementById("img");
document.querySelectorAll(".btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    elImg.src = `/images/${e.target.innerText}.png`;
  });
});
