"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const Circle_1 = require("./Circle");
class Cylinder extends Circle_1.Circle {
    constructor(radius, color, height) {
        super(radius, color);
        this._height = height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    volume() {
        return (this.radius * this.radius * Math.PI * this._height);
    }
}
exports.Cylinder = Cylinder;
