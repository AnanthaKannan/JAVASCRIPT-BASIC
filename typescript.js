import { type } from "node:os";

// explicit types
let firstName: string;
let age: number;
let isLoggedIn: boolean;

firstName = 'Kannan';
age = 25;
isLoggedIn = true;

// arrays
let arrayStr :string[] = [];
let arrayNum :number[] = [];
let arrayBool :boolean[] = [];

arrayStr = ['value-a', 'value-b', 'value-c'];
arrayNum = [10, 20, 30];
arrayBool = [true, false, true];

// union type
let mixed: (string|number)[] = [];
let uid: string|boolean;

mixed = ['name', 20]
uid = 'Kannan';
uid = true;

// object
let ninjaOne: object;
ninjaOne = {
    name: 'Kannan',
    age: 20,
    isLoggedIn: true
}

let ninjaTwo: {
 name: string,
 age: number,
 isLoggedIn: boolean   
}

ninjaTwo = {
    name: 'Kannan',
    age: 20,
    isLoggedIn: true
}

const result:any = [...Array(20)].map((value: string, i: number) => {
   return ninjaTwo = {
        name: value,
        age: 20,
        isLoggedIn: true
    }
})

// any -- it can be anything
let myAge:any;
myAge = 20;
myAge = 'Hello'

// function

const add:Function = (a:number, b:number, c?:number): void => { // void mention that there is no return values
    console.log(a, b, c);
}

add(10, 20) // third parameter is optional so we are used '?' in the front fo 'C'


const addition = (a:number, b:number):number => { // number mention here that it will return number
    return a + b;
}

// type

type stringOrNum = string|number;
type userDetails = {
    name:string,
    age: number,
    isLoggedIn: boolean
}

const value:stringOrNum = 'Kannan';

const myResults:userDetails[] = [...Array(10)].map((value: string, i: number): userDetails => {
    const retValue:userDetails = {
        name: 'name',
        age: 20,
        isLoggedIn: true
    }
    return retValue;
})
