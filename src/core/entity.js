import Random from "./random";

export default class Entity
{
    constructor(vector, velocity, size) {
        this.vector = vector;
        this.velocity = velocity;
        this.size = size;
        this.random = new Random();
    }

    updateVector(borders, vector) {
        if (this.vector[vector] >= borders[vector]) {
            this.vector[vector] = borders[vector];
        }

        if ((this.vector[vector] + this.velocity[vector]) >= borders[vector]) {
            this.velocity[vector] = -(this.velocity[vector] + this.random.number(-5, 1));
        }

        if ((this.vector[vector] + this.velocity[vector]) < 0) {
            this.velocity[vector] = (Math.abs(this.velocity[vector]) + this.random.number(-5, 1));
        }

        if (this.velocity[vector] === 0) {
            this.velocity[vector] = 1;
        }

        this.vector[vector] += this.velocity[vector];
    }

    tick(borders) {
        this.updateVector(borders, "x");
        this.updateVector(borders, "y");
    }
}
