"use strict";
// Datatypes in typescript
// primitive types (number, string, boolean)
// reference types ([], {}, ())
// Array, tuples, enums
// any, unknown, void, null, undefined, never
// Object.defineProperty(exports, "__esModule", { value: true });
// let a: number; //define that type of a is number 
// a= 35;
// let b; //type any cause we didn't define the typeof b
//type inference
//understanding type inference
// function abcd(a: number, b: string): void {}    //type annotation
//interface and types
// interface user{
//     name?: string, optional
//     email: string,
//     password: string
// }
// function getDataOfUser(obj: user) {}
// getDataOfUser({email: "test@gmail.com", password: "test"})
//extending interface
// interface admin extends user{admin: boolean;}
//type aliases
// type value= number | string | null;
// function cd(obj: value){}
//union(|) and intersection(&) types
//class - factory of objects
class Device {
    name = "lg";
    price = 1200;
    category = "electronics";
}
let d1 = new Device();
let d2 = new Device();
//constructor - maker
// define public is also imp
class HumanMaker {
    name;
    isHandsome;
    age = 0;
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
    }
}
let b1 = new HumanMaker('govind', true);
let b2 = new HumanMaker('harsh', false);
// this keyword in objects & class
//this - if we access class's variable in any kind of function under class then you have to use this 
class bottleMaker {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
let b3 = new bottleMaker('coca cola');
//# sourceMappingURL=app.js.map