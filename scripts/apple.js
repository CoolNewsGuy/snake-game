class Apple {
    constructor() {
        this.element = document.querySelector(".apple");
        this.left = this.element.style.left;
        this.top = this.element.style.top;
    }

    /**
     * Generate an apple at a random place in the container.
     */
    putApple() {
        let randomX = Math.random() * (container.width + 1);
        let randomY = Math.random() * (container.height + 1);

        if (randomX - 20 < 0) randomX = 40;
        if (randomY - 20 < 0) randomY = 40;

        this.element.style.left = this.left = randomX - 20 + "px";
        this.element.style.top = this.top = randomY - 20 + "px";
    }
}
