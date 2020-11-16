import Cube from "../entities/cube";
import Dot from "../entities/dot"
import Vector from "./vector";
import Velocity from "./velocity";
import Random from "./random";

export default class Scene
{
    constructor() {
        this.random = new Random();
    }

    getEntities(engine) {
        let entities = [], spawn;

        console.log();

        if (this.random.chance()) {
            spawn = engine.canvas.getWidth() > 576 ? 90 : 40;
            for (let i = 0; i < spawn; i++) {
                entities.push(
                    new Cube(
                        new Vector(this.random.number(0, engine.canvas.getWidth()), this.random.number(0, engine.canvas.getHeight())),
                        new Velocity(this.random.number(-5, 5), this.random.number(-5, 5)),
                        13,
                        this.random.colour()
                    )
                );
            }
        } else {
            spawn = engine.canvas.getWidth() > 576 ? 170 : 40;
            for (let i = 0; i < spawn; i++) {
                entities.push(
                    new Dot(
                        new Vector(this.random.number(0, engine.canvas.getWidth()), this.random.number(0, engine.canvas.getHeight())),
                        new Velocity(this.random.number(-5, 5), this.random.number(-5, 5)),
                        5,
                        this.random.colour(),
                        false
                    )
                );
            }
        }

        return entities;
    }
}
