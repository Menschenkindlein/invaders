import { memory } from "invaders/invaders_bg";

import {Game, Entity} from "invaders";

const game = Game.new();
const canvas = document.getElementById("canvas");
canvas.height = 700 + 70;
canvas.width = 700 + 70;

const ctx = canvas.getContext("2d");

const drawCar = () => {
    ctx.beginPath();
    ctx.fillStyle = "#FFCCCC";
    ctx.fillRect(
        (5 + game.car_x() - 3) * 7,
        (5 + game.car_y() - 3) * 7,
        6*7,
        6*7
    );
    ctx.stroke();
};

const drawObstacles = () => {
    ctx.beginPath();
    ctx.fillStyle = "#FFCCCC";
    const obstaclesPtr = game.obstacles();
    const obstaclesCount = game.get_obstacles_count();
    const obstacles = new Uint8Array(memory.buffer, obstaclesPtr, obstaclesCount * 2);

    for (let i = 0; i <= obstaclesCount * 2; i += 2) {
        ctx.fillRect(
            (5 + obstacles[i] - 2) * 7,
            (5 + obstacles[i+1] - 2) * 7,
            4*7,
            4*7
        );
    }
    ctx.stroke();
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

var tick = 0;

const renderLoop = () => {
    if (tick % 2 == 0) {
        game.update_obstacles();
    }

    if (tick == 10) {
        game.add_obstacle();
        tick = 0;
    }

    game.update_car(
        toLeft ? -1 : 0 + toRight ? 1 : 0,
        toDown ? 1 : 0 + toUp ? -1 : 0
    );

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacles();

    tick +=1;

    if (game.has_hit()) {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(40*7, 40*7, 20*7, 20*7);
        ctx.stroke();
    } else {
        requestAnimationFrame(renderLoop);
    }
};

requestAnimationFrame(renderLoop);
