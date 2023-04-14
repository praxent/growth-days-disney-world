class RandomTarget {
    screenWidth: number;
    screenHeight: number;
    yPosition: number = 0;
    xPosition: number = 0;
    targetSize: number;

    constructor(
        screenWidth: number,
        screenHeight: number,
        targetSize: number,
        isCentralized: Boolean = false) {
            this.screenWidth = screenWidth;
            this.screenHeight = screenHeight;
            this.targetSize = targetSize;
            isCentralized ? this.centralizePosition() : this.randomPosition();
        }
    
    centralizePosition() {
        this.yPosition = this.screenHeight / 2 - this.targetSize / 2;
        this.xPosition = this.screenWidth / 2 - this.targetSize / 2;
    }

    randomPosition() {
        this.yPosition = Math.random() * this.screenHeight - this.targetSize;
        this.xPosition = Math.random() * this.screenWidth - this.targetSize;
        if (this.yPosition <= this.targetSize) {
            this.yPosition = 0
        }
        if (this.xPosition <= this.targetSize) {
            this.xPosition = 0
        }
        this.targetSize -= 10;
    }
}

export { RandomTarget };