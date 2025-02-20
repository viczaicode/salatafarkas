// methods.js
export class Kep {
    constructor(valaszto) {
        this.kep = document.querySelector(valaszto);
        this.initEvents();
    }

    initEvents() {
        this.kep.addEventListener("mouseover", () => this.addBorder());
        this.kep.addEventListener("click", (event) => this.moveToContainer(event));
    }

    addBorder() {
        this.kep.classList.add("szegely");
    }

    moveToContainer(event) {
        document.querySelector("#csonak").appendChild(event.target);
    }
}
