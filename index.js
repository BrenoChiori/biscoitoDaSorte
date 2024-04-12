const biscuitClose = document.querySelector("#biscuitClose")
const biscuitOpen = document.querySelector("#biscuitOpen")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

biscuitClose.addEventListener('click', toggleScreen)
biscuitOpen.addEventListener('click', toggleScreen)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}