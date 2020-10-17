export default class Canvas
{
    constructor(target) {
        this.canvas = target;
        this.ctx = this.canvas.getContext("2d");
    }

    resize() {
        document.body.style.height = document.body.clientHeight + "px";
        this.canvas.height = document.body.clientHeight;
        this.canvas.width = document.body.clientWidth;
    }

    getHeight() {
        return this.canvas.height;
    }

    getWidth() {
        return this.canvas.width;
    }

    drawBackground() {
        this.ctx.fillStyle = "#1A2026";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMouse(mouse) {
        if (mouse.x === null || mouse.y === null) {
            return;
        }

        this.ctx.beginPath();
        this.ctx.arc(mouse.x, mouse.y, mouse.radius - 10, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = "#191f24";
        this.ctx.fill();
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = '#1d2329';
        this.ctx.stroke();
    }

    renderEntity(entity, options) {
        entity.render(this, options);
    }
}
