import Canvas from "./core/canvas";
import Engine from "./core/engine";
import Scene from "./core/scene";
import Social from "./extras/social";

document.addEventListener('DOMContentLoaded', function(event) {
    const canvas = new Canvas(document.getElementById('canvas')),
          engine = new Engine(canvas);

    canvas.resize();

    window.addEventListener("resize", function () {
        canvas.resize();
    });

    engine.setScene(new Scene())
    engine.init();

    Social.bind();
});


