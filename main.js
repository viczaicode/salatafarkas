import { kepekBeillesztese } from "./metodusok.js";

 

let teszt = document.getElementById("kepestag")
kepekBeillesztese(teszt)
console.log(teszt);

const kep = document.querySelector('.kepecske') 
const kep2 = document.querySelector('.kepecske2') 
const kep3 = document.querySelector('.kepecske3') 
kep.addEventListener("mouseover", feltesz1)
function feltesz1() {
    kep.classList.add("szegely")
}

kep2.addEventListener("mouseover", feltesz2)
function feltesz2() {
    kep2.classList.add("szegely")
}

kep3.addEventListener("mouseover", feltesz3)
function feltesz3() {
    kep3.classList.add("szegely")
}

let jobbElem = document.querySelector("#csonak")
kep.addEventListener("click", athelyez1)
function athelyez1(event) {
    jobbElem.appendChild(event.target)
}


kep2.addEventListener("click", athelyez2)
function athelyez2(event) {
    jobbElem.appendChild(event.target)
}

kep3.addEventListener("click", athelyez3)
function athelyez3(event) {
    jobbElem.appendChild(event.target)
}