"use strict";
exports.__esModule = true;
var Cylinder_1 = require("./Cylinder");
var Circle_1 = require("./Circle");
var circleTest = new Circle_1.Circle(10, 'blue');
var cylinderTest = new Cylinder_1.Cylinder(6, 'red', 10);
console.log("dien tich hinh tron ".concat(circleTest.area()));
console.log("the tich hinh tru ".concat(cylinderTest.volume()));
