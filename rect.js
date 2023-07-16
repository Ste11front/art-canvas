class Rect{

    constructor(originX, originY, width, height, color = '#000000'){

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = Math.random() * 1.2;
        this.velocityY = Math.random() * 1.2;

    }

    animate(canvasWidth, canvasHeight) {
        if (this.originX + this.width > canvasWidth || this.originX < 0) {
            this.velocityX = -this.velocityX;
        }
        if (this.originY + this.height > canvasHeight || this.originY < 0) {
            this.velocityY = -this.velocityY;
        }
        this.originX += this.velocityX;
        this.originY += this.velocityY;
    }


    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height)
    }


    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = 'rgba(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ', ' + Math.random() + ')'

        const newRect = new Rect(canvasWidth = 0, canvasHeight = 0, 2, 2, rgbString);

        return newRect;

    }

}