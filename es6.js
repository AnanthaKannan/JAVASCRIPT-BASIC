// Template literals       => use for multiline string ``
const str = `hello inida
                hai inida`;

// let and const           => variable
let name = 'kannan';
const age = 24;

// arrow function
const fnName = () =>{
    console.log('arrow fn is here')
}
fnName();
// Default parameter 
const defaultPara = (status=false) =>{
    console.log(`status ${ status }`)
}
defaultPara();

// Object Literals  => property name and value name is same? omit the value name
let amonunt = 500;
let objLit = {
    amonunt
}
console.log('amount', objLit.amonunt)

// Object Destructuring
let obj = {
    qualification: 'BE'
}

const { qualification } = obj;
console.log(`qualification ${ qualification }`);

// Array Destructuring
let arr = ['ananth', 'kannan'];
const [ fName, lName ] = arr;
console.log(`fname ${ fName} lname ${ lName }`)

// Rest and spread operator
const restSpread = ( fname, lname, ...spread) => {
    console.log(fname, lname, spread);
}

restSpread('ana', 'kanan', 'bala', 'mani', 'king')

