class Snake {
    constructor() {
        this.element = document.querySelector(".snake");
        this.left = this.element.style.left;
        this.top = this.element.style.top;
        this.isHorizontal = true;
        this.currentId = "snake-horizontal-right";
        this.previousId = "";
        this.isAjustedVertically = false;
        this.isAjustedHorizontally = false;
    }

    // ? functions to move snake
    moveUp() {
        this.isHorizontal = false;
        this.isAjustedHorizontally = false;
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
        this.adjustVerticality();
        this.currentId = "snake-vertical-bottom";
    }

    moveLeft() {
        this.isHorizontal = true;
        this.element.id = "snake-horizontal-left";
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake - 10 + "px";
        this.changePreviousId();
        this.adjustHorizontality();
        this.currentId = "snake-horizontal-left";
    }

    moveRight() {
        this.isHorizontal = true;
        this.isAjustedVertically = false;
        this.element.id = "snake-horizontal-right";
        let leftOfSnake = +getComputedStyle(this.element).left.replace(
            "px",
            ""
        );
        this.element.style.left = this.left = leftOfSnake + 10 + "px";
        this.changePreviousId();
        this.adjustHorizontality();
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

    adjustVerticality() {
        if (
            this.element.id === "snake-vertical-top" &&
            this.previousId === "snake-horizontal-right" &&
            !this.isAjustedVertically
        ) {
            this.element.style.top =
                +getComputedStyle(this.element).top.replace("px", "") -
                25 +
                "px";
            this.element.style.left =
                +getComputedStyle(this.element).left.replace("px", "") +
                25 +
                "px";
            this.isAjustedVertically = true;
        }

        if (
            this.element.id === "snake-vertical-bottom" &&
            this.previousId === "snake-horizontal-right" &&
            !this.isAjustedVertically
        ) {
            this.element.style.left =
                +getComputedStyle(this.element).left.replace("px", "") +
                25 +
                "px";
            this.isAjustedVertically = true;
        }
    }

    adjustHorizontality() {
        if (
            this.element.id === "snake-horizontal-left" &&
            this.previousId === "snake-vertical-top" &&
            !this.isAjustedHorizontally
        ) {
            this.element.style.left =
                +this.element.style.left.replace("px", "") - 25 + "px";
            this.isAjustedHorizontally = true;
        }

        if (
            this.element.id === "snake-horizontal-left" &&
            this.previousId === "snake-vertical-bottom" &&
            !this.isAjustedHorizontally
        ) {
            this.element.style.left =
                +this.element.style.left.replace("px", "") - 25 + "px";
            this.element.style.top =
                +this.element.style.top.replace("px", "") + 25 + "px";
            this.isAjustedHorizontally = true;
        }

        if (
            this.element.id === "snake-horizontal-right" &&
            this.previousId === "snake-vertical-bottom" &&
            !this.isAjustedHorizontally
        ) {
            this.element.style.top =
                +this.element.style.top.replace("px", "") + 25 + "px";
            this.isAjustedHorizontally = true;
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
