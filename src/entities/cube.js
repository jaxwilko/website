import Entity from "../core/entity";

export default class Cube extends Entity
{
    constructor(vector, velocity, size, colour) {
        size = size || 100;
        super(vector, velocity, size);

        this.colour = colour;

        this.points = [
            [-1, -1, -1],
            [-1, -1, 1],
            [-1, 1, -1],
            [-1, 1, 1],
            [1, -1, -1],
            [1, -1, 1],
            [1, 1, -1],
            [1, 1, 1]
        ];

        this.edges = [
            [0, 1],
            [1, 3],
            [3, 2],
            [2, 0],
            [4, 5],
            [5, 7],
            [7, 6],
            [6, 4],
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7]
        ];

        this.scale(this.size, this.size, this.size);
        this.rotateByVelocity();
    }

    scale(factor0, factor1, factor2) {
        this.points.forEach(function (points) {
            points[0] *= factor0;
            points[1] *= factor1;
            points[2] *= factor2;
        });
    }

    rotateByVelocity() {
        this.rotate(this.velocity.y / 100, this.velocity.x / 100);
    }

    rotate(angleX, angleY) {
        var sinX = Math.sin(angleX);
        var cosX = Math.cos(angleX);

        var sinY = Math.sin(angleY);
        var cosY = Math.cos(angleY);

        this.points.forEach(function (node) {
            var x = node[0];
            var y = node[1];
            var z = node[2];

            node[0] = x * cosX - z * sinX;
            node[2] = z * cosX + x * sinX;

            z = node[2];

            node[1] = y * cosY - z * sinY;
            node[2] = z * cosY + y * sinY;
        });
    }

    render(canvas, options) {
        const _this = this;
        // this.rotate(Math.PI / 4, Math.atan(Math.sqrt(2)));
        if (options.mouse) {
            this.collision(options.mouse, 15);
        }

        this.tick({
            x: canvas.getWidth(),
            y: canvas.getHeight(),
        });

        this.rotateByVelocity();

        canvas.ctx.beginPath();
        canvas.ctx.lineWidth = 2;
        canvas.ctx.lineCap = "round";

        let i;
        for (i in this.edges) {
            if (!this.edges.hasOwnProperty(i)) {
                continue;
            }
            let p1 = _this.points[this.edges[i][0]],
                p2 = _this.points[this.edges[i][1]];
            if (i === 0) {
                canvas.ctx.moveTo(p1[0] + this.vector.x, p1[1] + this.vector.y);
            }
            canvas.ctx.moveTo(p1[0] + this.vector.x, p1[1] + this.vector.y);
            canvas.ctx.lineTo(p2[0] + this.vector.x, p2[1] + this.vector.y);
        }

        canvas.ctx.closePath();
        canvas.ctx.strokeStyle = this.colour;
        canvas.ctx.stroke();
    }
}
