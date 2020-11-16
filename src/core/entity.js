import Random from "./random";

export default class Entity
{
    constructor(vector, velocity, size) {
        this.vector = vector;
        this.velocity = velocity;
        this.size = size;
        this.random = new Random();
    }

    collision(entity, amount) {
        if (typeof entity.vector !== "undefined") {
            entity = entity.vector;
        }

        if (entity.x === null || entity.y === null) {
            return false;
        }

        let self = {radius: this.size / 2, x: this.vector.x, y: this.vector.y},
            dx = self.x - entity.x,
            dy = self.y - entity.y,
            distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < self.radius + entity.radius) {
            if (entity.x > self.x) {
                this.velocity.x = -amount;
            }
            if (entity.x < self.x) {
                this.velocity.x = amount;
            }
            if (entity.y > self.y) {
                this.velocity.y = -amount;
            }
            if (entity.y < self.y) {
                this.velocity.y = amount;
            }
        }
    }

    inRange(entity, range) {
        if (entity.vector.x === null || entity.vector.y === null) {
            return false;
        }

        let self = {radius: range, x: this.vector.x, y: this.vector.y},
            dx = self.x - entity.vector.x,
            dy = self.y - entity.vector.y,
            distance = Math.sqrt(dx * dx + dy * dy);

        return distance < self.radius + entity.size;
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
