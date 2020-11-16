import Entity from "../core/entity";

export default class Dot extends Entity
{
    constructor(vector, velocity, size, colour, drawDot) {
        size = size || 100;
        super(vector, velocity, size);

        this.colour = colour;
        this.drawDot = drawDot;
    }

    render(canvas, options) {
        const _this = this;
        let grad, i;

        if (options.mouse) {
            this.collision(options.mouse, 5);
        }

        this.tick({
            x: canvas.getWidth(),
            y: canvas.getHeight(),
        });

        canvas.ctx.lineWidth = 2;

        if (options.entities) {
            for (i in options.entities) {
                if (!options.entities.hasOwnProperty(i)) {
                    continue;
                }

                if (this.inRange(options.entities[i], 100)) {
                    grad = canvas.ctx.createLinearGradient(this.vector.x, this.vector.y, options.entities[i].vector.x, options.entities[i].vector.y);
                    grad.addColorStop(0, this.colour);
                    grad.addColorStop(1, options.entities[i].colour);

                    canvas.ctx.strokeStyle = grad;
                    canvas.ctx.lineCap = "round";
                    canvas.ctx.beginPath();
                    canvas.ctx.moveTo(this.vector.x, this.vector.y);
                    canvas.ctx.lineTo(options.entities[i].vector.x, options.entities[i].vector.y);
                    canvas.ctx.stroke();
                }
            }
        }

        if (this.drawDot) {
            canvas.ctx.beginPath();
            canvas.ctx.arc(this.vector.x, this.vector.y, this.size / 2, 0, 2 * Math.PI);
            canvas.ctx.lineCap = "round";
            canvas.ctx.fillStyle = this.colour;
            canvas.ctx.closePath();
            canvas.ctx.fill();
        }
    }
}
