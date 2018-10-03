import { memory } from "invaders/invaders_bg";

import {Game, Entity} from "invaders";

var game = Game.new();
const canvas = document.getElementById("canvas");
canvas.height = 700 + 140;
canvas.width = 700 + 140;

const ctx = canvas.getContext("2d");

const drawCar = (x, y) => {
    ctx.beginPath();
    ctx.fillStyle = "#9933FF";
    ctx.fillRect(
        (10 + x - 3) * 7,
        (10 + y - 3) * 7,
        6*7,
        6*7
    );
    ctx.stroke();
};

const drawInvaders = (array, from, to) => {
    ctx.beginPath();
    ctx.fillStyle = "#FFCCCC";

    for (let i = from; i < to; i += 2) {
        ctx.fillRect(
            (10 + array[i] - 2) * 7,
            (10 + array[i+1] - 2) * 7,
            4*7,
            4*7
        );
    }
    ctx.stroke();
};

const drawProjectiles = (array, from, to) => {
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";

    for (let i = from; i < to; i += 2) {
        ctx.fillRect(
            (10 + array[i] - 1) * 7,
            (10 + array[i+1] - 1) * 7,
            2*7,
            2*7
        );
    }
    ctx.stroke();
};

const draw = () => {
    const render = game.render();
    const render_array = new Uint8Array(
        memory.buffer,
        render.render_ptr,
        (1 + render.invaders_count + render.projectiles_count) * 2);

    drawCar(render_array[0], render_array[1]);
    drawInvaders(render_array, 2, (1 + render.invaders_count) * 2);
    drawProjectiles(
        render_array,
        (1 + render.invaders_count) * 2,
        (1 + render.invaders_count + render.projectiles_count) * 2);
};

var toLeft = false;
var toRight = false;
var toUp = false;
var toDown = false;

canvas.onkeydown = (e) => {
    if (e.key == "a") {
        toLeft = true;
    } else if (e.key == "s") {
        toDown = true;
    } else if (e.key == "d") {
        toRight = true;
    } else if (e.key == "w") {
        toUp = true;
    } else if (e.key == " ") {
        game.fire(); // direct call of `game` method here <<<<<<
    }
};

canvas.onkeyup = (e) => {
    if (e.key == "a") {
        toLeft = false;
    } else if (e.key == "s") {
        toDown = false;
    } else if (e.key == "d") {
        toRight = false;
    } else if (e.key == "w") {
        toUp = false;
    }
};

var af = null;

canvas.onclick = () => {
    if (af === null) {
        game = Game.new();
        af = requestAnimationFrame(renderLoop);
    }
};

var tick = 0;

const renderLoop = () => {
    if (tick % 16 == 0) {
        game.update_invaders();
    }

    game.update_projectiles();

    game.collide();

    if (tick == 64) {
        game.add_invader();
        tick = 0;
    }

    game.update_tank(
        toLeft ? -1 : 0 + toRight ? 1 : 0,
        toDown ? 1 : 0 + toUp ? -1 : 0
    );

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();

    tick +=1;

    if (game.is_over()) {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(50*7, 50*7, 20*7, 20*7);
        ctx.stroke();
        af = null;
    } else {
        af = requestAnimationFrame(renderLoop);
    }
};
