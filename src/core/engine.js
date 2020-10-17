export default class Engine
{
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = null;
        this.mouse = {
            radius: 75,
            x: null,
            y: null
        };
    }

    init() {

        this.canvas.canvas.ontouchstart = this.canvas.canvas.ontouchmove = this.canvas.canvas.onclick = this.canvas.canvas.onmousemove = (e) => {
            this.onMouseMove(e);
        };

        this.canvas.canvas.onmouseout = this.canvas.canvas.ontouchend = (e) => {
            this.mouse.x = this.mouse.y = null;
        }

        const _this = this, tick = function (timestamp) {
            if (!start) {
                start = timestamp;
            }

            const elapsed = timestamp - start;

            _this.render();

            window.requestAnimationFrame(tick);
        };

        let start = null;

        window.requestAnimationFrame(tick);
    }

    onMouseMove(e) {
        const bounds = this.canvas.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - bounds.left;
        this.mouse.y = e.clientY - bounds.top;
    }

    setScene(scene) {
        this.scene = scene;
        this.entities = this.scene.getEntities(this);
    }

    render() {
        let i;
        this.canvas.drawBackground();
        for (i in this.entities) {
            if (!this.entities.hasOwnProperty(i)) {
                continue;
            }
            this.canvas.renderEntity(this.entities[i], {
                mouse: this.mouse
            });
        }
        //
    }
}
