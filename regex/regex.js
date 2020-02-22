// @ts-check

// MarvinTalksTooMuch   =>  Marvin Talks Too Much

let first = "Marvin Talks Too Much";
const pattern_a = /([a-z])([A-Z])/g
const pattern_b = /[A-Z]/g
first = first.replace(pattern_a, '$1 $2');
const second = first.replace(pattern_b, ' $&');

// console.log(first)
// console.log(second)

