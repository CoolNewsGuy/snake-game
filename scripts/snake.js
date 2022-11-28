class Snake {
    constructor() {
        this.element = document.querySelector(".snake");
        this.left = this.element.style.left;
        this.top = this.element.style.top;
        this.isHorizontal = true;
    }

    // ? functions to move snake
    moveUp() {
        this.isHorizontal = false;
        this.adjustVerticality();
        this.element.id = "snake-vertical-top";
        let topOfSnake = +getComputedStyle(this.element).top.replace("px", "");
        this.element.style.top = this.top = topOfSnake - 10 + "px";
    }

    moveDown() {
        this.isHorizontal = false;
        this.element.id = "snake-vertical-bottom";
        let topOfSnake = +getComputedStyle(this.element).top.replace("px", "");
        this.element.style.top = this.top = topOfSnake + 10 + "px";
    }

    moveLeft() {
        this.isHorizontal = true;
        this.element.id = "snake-horizontal-left";
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake - 10 + "px";
    }

    moveRight() {
        this.isHorizontal = true;
        this.adjustHorizontality();
        this.element.id = "snake-horizontal-right";
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake + 10 + "px";
    }

    /**
     * Add a piece to snake when snake eats apple.
     */
    addPieceToSnake() {
        let piece = document.createElement("div");

        piece.classList.add("piece");
        this.element.appendChild(piece);
    }

    /**
     * First check snake if it's horizontal (moving to right or left).
     * If it's horizontal, then move it to top by 25px.
     */
    adjustVerticality() {
        if (this.isHorizontal) {
            this.element.style.top =
                +getComputedStyle(this.element).top.replace("px", "") -
                25 +
                "px";
            this.isHorizontal = false;
        }
    }

    /**
     * First check snake if it's vertical (moving to top or bottom).
     * If it's vertical, then move it to bottom by 25px.
     */
    adjustHorizontality() {
        if (!this.isHorizontal) {
            if (this.element.id === "snake-vertical-bottom") {
                this.element.style.top =
                    +this.element.style.top.replace("px", "") + 25 + "px";
            }

            this.element.style.left =
                +getComputedStyle(this.element).left.replace("px", "") -
                25 +
                "px";

            this.isHorizontal = true;
        }
    }

    /**
     * let snake eat apple.
     */
    eatApple() {}
}
