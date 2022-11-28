class Snake {
    constructor() {
        this.element = document.querySelector(".snake");
        this.left = this.element.style.left;
        this.top = this.element.style.top;
        this.isHorizontal = true;
        this.currentId = "snake-horizontal-right";
        this.previousId = "";
        this.isAjustedVertically = false;
    }

    // ? functions to move snake
    moveUp() {
        this.isHorizontal = false;
        this.element.id = "snake-vertical-top";
        let topOfSnake = +getComputedStyle(this.element).top.replace("px", "");
        this.element.style.top = this.top = topOfSnake - 10 + "px";
        this.changePreviousId();
        this.adjustVerticality();
        this.currentId = "snake-vertical-top";
    }

    moveDown() {
        this.isHorizontal = false;
        this.element.id = "snake-vertical-bottom";
        let topOfSnake = +getComputedStyle(this.element).top.replace("px", "");
        this.element.style.top = this.top = topOfSnake + 10 + "px";
        this.changePreviousId();
        this.currentId = "snake-vertical-bottom";
    }

    moveLeft() {
        this.isHorizontal = true;
        this.element.id = "snake-horizontal-left";
        this.adjustHorizontality();
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake - 10 + "px";
        this.changePreviousId();
        this.currentId = "snake-horizontal-left";
    }

    moveRight() {
        this.isHorizontal = true;
        this.isAjustedVertically = false;
        this.element.id = "snake-horizontal-right";
        this.adjustHorizontality();
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake + 10 + "px";
        this.changePreviousId();
        this.currentId = "snake-horizontal-right";
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
        if (
            this.previousId === "snake-horizontal-right" &&
            !this.isAjustedVertically
        ) {
            this.element.style.top =
                +getComputedStyle(snake.element).top.replace("px", "") -
                25 +
                "px";
            this.element.style.left =
                +snake.element.style.left.replace("px", "") + 25 + "px";
            this.isAjustedVertically = true;
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

    changePreviousId() {
        if (this.currentId !== this.element.id)
            this.previousId = this.currentId;
    }

    /**
     * let snake eat apple.
     */
    eatApple() {}
}
