const b1 = document.querySelectorAll(".btn");
var input = document.getElementById("display")
const b2 = document.querySelector(".allclr")

b1.forEach((btn)=>{
  btn.addEventListener("click" , () => {
    input.value  += btn.value
  })
})

b2.addEventListener("click" , ()=>{
  input.value = ""
})



