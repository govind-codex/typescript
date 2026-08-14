"use strict";
// Datatypes in typescript
// primitive types (number, string, boolean)
// reference types ([], {}, ())
// Array, tuples, enums
// any, unknown, void, null, undefined, never
Object.defineProperty(exports, "__esModule", { value: true });
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
// class Device {
//     name = "lg";
//     price = 1200;
//     category = "electronics";
// }
// let d1 = new Device();
// let d2 = new Device();
// //constructor - maker
// // define public is also imp
// class HumanMaker{
//     age=0;
//     constructor(public name: string, public isHandsome: boolean){
//     }
// }
// let b1 = new HumanMaker('govind', true)
// let b2 = new HumanMaker('harsh', false)
// // this keyword in objects & class
// //this - if we access class's variable in any kind of function under class then you have to use this 
// class bottleMaker {
//     constructor(public name: string) {
//         this.name = name;
//     }
// }
// let b3 = new bottleMaker('coca cola');
// public , protected , private
// class bottleMaker {
//     constructor(private name: string) {}
// }
// let b1 = new bottleMaker('milton');
// b1.name = "hululu"; // This will cause an error since name is private
// protected only use when class inherted by another class like using extend keword
//getter and setter
class user {
    _name;
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new user('govind', 23);
//# sourceMappingURL=app.js.map