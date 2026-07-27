
const b1 = document.querySelector(".btn")



b1.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.value || this.textContent);
  });
});
