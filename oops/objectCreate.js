// @ts-check
"use strict";

const {MyClass} = require('./classTwo')
class MyName extends MyClass{

    constructor(brand, value){
        super(value)
        this.carname = brand;
    }

    present(){
        return `I have a ${this.carname}, since 2020`;
    }
    
}

const myName = new MyName('brand', 'value');
myName.carname = 'hyper-ledger'
console.log(myName.present())
