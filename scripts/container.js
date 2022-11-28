class Container {
    constructor() {
        this.element = document.querySelector(".container");
        this.width = +getComputedStyle(this.element).width.replace("px", "");
        this.height = +getComputedStyle(this.element).height.replace("px", "");
        this.squareContainers;
    }

    drawBlackSquare() {
        let blackSquare = document.createElement("div");
        blackSquare.classList.add("square", "black-square");

        return blackSquare;
    }

    drawGreenSquare() {
        let greenSquare = document.createElement("div");
        greenSquare.classList.add("square", "green-square");

        return greenSquare;
    }

    drawSquareContainers() {
        for (let i = 0; i < 10; i++) {
            let squareContainer = document.createElement("div");
            squareContainer.classList.add("square-container");

            if (i % 2 === 0) squareContainer.classList.add("even-container");
            else squareContainer.classList.add("odd-container");

            this.element.appendChild(squareContainer);
        }
        this.squareContainers = document.querySelectorAll(".square-container");
    }

    drawSquares() {
        this.drawSquareContainers();
        this.squareContainers.forEach((container) => {
            if (container.classList.contains("even-container")) {
                for (let i = 0; i < 5; i++) {
                    container.appendChild(this.drawBlackSquare());
                    container.appendChild(this.drawGreenSquare());
                }
            } else if (container.classList.contains("odd-container")) {
                for (let i = 0; i < 5; i++) {
                    container.appendChild(this.drawGreenSquare());
                    container.appendChild(this.drawBlackSquare());
                }
            }
        });
    }
}
