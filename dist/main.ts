
import {Cylinder} from "./Cylinder";
import {Circle} from "./Circle";
let circleTest = new Circle (10,'blue');
let cylinderTest = new Cylinder(6,'red',10);
console.log(`dien tich hinh tron ${circleTest.area()}`);
console.log(`the tich hinh tru ${cylinderTest.volume()}`);