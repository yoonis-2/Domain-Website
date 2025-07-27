const IconOne = document.querySelector("#IconOne")
const IconTwo = document.querySelector("#IconTwo")
const IconThree = document.querySelector("#IconThree")
const IconFour = document.querySelector("#IconFour")
const Quiz1 = document.querySelector("#Quiz1")
const Quiz2 = document.querySelector("#Quiz2")
const Quiz3 = document.querySelector("#Quiz3")
const Quiz4 = document.querySelector("#Quiz4")
console.log(IconOne,IconTwo,IconThree,IconFour)

IconOne.addEventListener("click", () =>{
    Quiz1.classList.toggle("hidden")
})
// icon-two
IconTwo.addEventListener("click", () =>{
    Quiz2.classList.toggle("hidden")
})
// icon-three
IconThree.addEventListener("click", () =>{
    Quiz3.classList.toggle("hidden")
})
// icon-three
IconFour.addEventListener("click", () =>{
    Quiz4.classList.toggle("hidden")
})