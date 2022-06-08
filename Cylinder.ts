import {Circle} from "./Circle";

export class Cylinder extends Circle{

    private _height: number;
    constructor(radius : number,color : string,height : number) {
        super(radius,color)
        this._height = height;
    }

     get height(): number {
         return this._height;
     }

     set height(value: number) {
         this._height = value;
     }
     public  volume(){
           return  (this.radius * this.radius * Math.PI * this._height);

     }

 }