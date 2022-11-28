class Container {
    constructor() {
        this.element = document.querySelector(".container");
        this.width = +getComputedStyle(this.element).width.replace("px", "");
        this.height = +getComputedStyle(this.element).height.replace("px", "");
    }
}
