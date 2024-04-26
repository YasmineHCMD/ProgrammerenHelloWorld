console.log("Hallo wereld!")

let bericht = "Hello world!"
let kop = document.querySelector ("h1")

const button = document.querySelector ("button")

function veranderKop () {
    kop.textContent = bericht
}

button.addEventListener ("click", veranderKop)