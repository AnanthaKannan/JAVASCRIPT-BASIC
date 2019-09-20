
const items = [
    {name:'a', prize: 200},
    {name:'b', prize: 300},
    {name:'c', prize: 400},
    {name:'d', prize: 500},
    {name:'e', prize: 600},
    {name:'f', prize: 700},
    {name:'g', prize: 800}
]


const filteritem = items.filter((item) =>{
    return item.prize > 250;
})
// console.log(filteritem);

const itemsName = items.map((item) =>{
    return item.prize > 400
})
// console.log(itemsName);

const fountItem = items.find((item) =>{
    return item.prize == 200;
})
// console.log(fountItem);

// working justlike forloop. it will not retrun anything
items.forEach((item) =>{
    // console.log(item.prize)
})

// if any one of the item is true then, it will return only true or false
const isThere = items.some((item) =>{
    return item.prize > 500;
})
// console.log(isThere);

// if all condition is true then only it return true or false.
const everyItem = items.every((item) =>{
    return item.prize > 500;
})
// console.log(everyItem);

// it is for to add values
const total = items.reduce((previousValue, item) =>{
        return item.prize + previousValue;
}, 0)
console.log(total);

