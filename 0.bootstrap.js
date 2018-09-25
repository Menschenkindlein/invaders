(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/invaders.js":
/*!**************************!*\
  !*** ../pkg/invaders.js ***!
  \**************************/
/*! exports provided: __wbg_random_86efc8986c8a8805, Entity, Game, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_86efc8986c8a8805\", function() { return __wbg_random_86efc8986c8a8805; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _invaders_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invaders_bg */ \"../pkg/invaders_bg.wasm\");\n/* tslint:disable */\n\n\nconst __wbg_random_86efc8986c8a8805_target = Math.random.bind(Math) || function() {\n    throw new Error(`wasm-bindgen: Math.random.bind(Math) does not exist`);\n};\n\nfunction __wbg_random_86efc8986c8a8805() {\n    return __wbg_random_86efc8986c8a8805_target();\n}\n\nfunction freeEntity(ptr) {\n\n    _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_entity_free\"](ptr);\n}\n/**\n*/\nclass Entity {\n\n    static __construct(ptr) {\n        return new Entity(ptr);\n    }\n\n    constructor(ptr) {\n        this.ptr = ptr;\n\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeEntity(ptr);\n    }\n}\n\nfunction freeGame(ptr) {\n\n    _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_game_free\"](ptr);\n}\n/**\n*/\nclass Game {\n\n    static __construct(ptr) {\n        return new Game(ptr);\n    }\n\n    constructor(ptr) {\n        this.ptr = ptr;\n\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeGame(ptr);\n    }\n    /**\n    * @returns {Game}\n    */\n    static new() {\n        return Game.__construct(_invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_new\"]());\n    }\n    /**\n    * @returns {void}\n    */\n    update_obstacles() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_update_obstacles\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    add_obstacle() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_add_obstacle\"](this.ptr);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {void}\n    */\n    update_car(arg0, arg1) {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_update_car\"](this.ptr, arg0, arg1);\n    }\n    /**\n    * @returns {boolean}\n    */\n    has_hit() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return (_invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_has_hit\"](this.ptr)) !== 0;\n    }\n    /**\n    * @returns {number}\n    */\n    obstacles() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_obstacles\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_obstacles_count() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_get_obstacles_count\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    car_x() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_car_x\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    car_y() {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        return _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"game_car_y\"](this.ptr);\n    }\n}\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/invaders.js?");

/***/ }),

/***/ "../pkg/invaders_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/invaders_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __wbg_entity_free, __wbg_game_free, game_new, game_update_obstacles, game_add_obstacle, game_update_car, game_has_hit, game_obstacles, game_get_obstacles_count, game_car_x, game_car_y */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./invaders */ \"../pkg/invaders.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/invaders_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var invaders_invaders_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invaders/invaders_bg */ \"../pkg/invaders_bg.wasm\");\n/* harmony import */ var invaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invaders */ \"../pkg/invaders.js\");\n\n\n\n\nconst game = invaders__WEBPACK_IMPORTED_MODULE_1__[\"Game\"].new();\nconst canvas = document.getElementById(\"canvas\");\ncanvas.height = 700 + 70;\ncanvas.width = 700 + 70;\n\nconst ctx = canvas.getContext(\"2d\");\n\nconst drawCar = () => {\n    ctx.beginPath();\n    ctx.fillStyle = \"#FFCCCC\";\n    ctx.fillRect(\n        (5 + game.car_x() - 3) * 7,\n        (5 + game.car_y() - 3) * 7,\n        6*7,\n        6*7\n    );\n    ctx.stroke();\n};\n\nconst drawObstacles = () => {\n    ctx.beginPath();\n    ctx.fillStyle = \"#FFCCCC\";\n    const obstaclesPtr = game.obstacles();\n    const obstaclesCount = game.get_obstacles_count();\n    const obstacles = new Uint8Array(invaders_invaders_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, obstaclesPtr, obstaclesCount * 2);\n\n    for (let i = 0; i <= obstaclesCount * 2; i += 2) {\n        ctx.fillRect(\n            (5 + obstacles[i] - 2) * 7,\n            (5 + obstacles[i+1] - 2) * 7,\n            4*7,\n            4*7\n        );\n    }\n    ctx.stroke();\n};\n\nvar toLeft = false;\nvar toRight = false;\nvar toUp = false;\nvar toDown = false;\n\ncanvas.onkeydown = (e) => {\n    if (e.key == \"a\") {\n        toLeft = true;\n    } else if (e.key == \"s\") {\n        toDown = true;\n    } else if (e.key == \"d\") {\n        toRight = true;\n    } else if (e.key == \"w\") {\n        toUp = true;\n    }\n};\n\ncanvas.onkeyup = (e) => {\n    if (e.key == \"a\") {\n        toLeft = false;\n    } else if (e.key == \"s\") {\n        toDown = false;\n    } else if (e.key == \"d\") {\n        toRight = false;\n    } else if (e.key == \"w\") {\n        toUp = false;\n    }\n};\n\nvar tick = 0;\n\nconst renderLoop = () => {\n    if (tick % 2 == 0) {\n        game.update_obstacles();\n    }\n\n    if (tick == 10) {\n        game.add_obstacle();\n        tick = 0;\n    }\n\n    game.update_car(\n        toLeft ? -1 : 0 + toRight ? 1 : 0,\n        toDown ? 1 : 0 + toUp ? -1 : 0\n    );\n\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCar();\n    drawObstacles();\n\n    tick +=1;\n\n    if (game.has_hit()) {\n        ctx.beginPath();\n        ctx.fillStyle = \"#FF0000\";\n        ctx.fillRect(40*7, 40*7, 20*7, 20*7);\n        ctx.stroke();\n    } else {\n        requestAnimationFrame(renderLoop);\n    }\n};\n\nrequestAnimationFrame(renderLoop);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);