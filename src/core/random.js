export default class Random
{
    constructor() {
        this.colours = [
            "#526170",
            "#4D5478",
            "#676E95",
            "#FF5370",
            "#F78C6C",
            "#FFCB6B",
            "#C3E88D",
            "#82AAFF",
            "#C792EA",
            "#EAEAEA",
            "#FFCB6B",
            "#F92D72",
            "#F692B2",
            "#C269BC",
            "#94CF95",
            "#7FE4D2",
            "#C792EA",
            "#F4F5F2",
            "#FB6396",
            "#58D6BF",
        ];
    }

    number(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    colour() {
        return this.colours[Math.floor(Math.random() * this.colours.length)];
    }
}
