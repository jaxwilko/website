import Cube from "../entities/cube";
import Vector from "./vector";
import Velocity from "./velocity";
import Random from "./random";

export default class Scene
{
    constructor() {
        this.random = new Random();
    }

    getEntities(engine) {
        let cubes = [];

        for (let i = 0; i < 90; i++) {
            cubes.push(
                new Cube(
                    new Vector(this.random.number(0, engine.canvas.getWidth()), this.random.number(0, engine.canvas.getHeight())),
                    new Velocity(this.random.number(-5, 5), this.random.number(-5, 5)),
                    13,
                    this.random.colour()
                )
            );
        }

        return cubes;
    }
}
