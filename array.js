
const items = [
    {name:'a', prize: 200},
    {name:'b', prize: 300},
    {name:'c', prize: 400},
    {name:'d', prize: 500},
    {name:'e', prize: 600},
    {name:'f', prize: 700},
    {name:'g', prize: 800}
]



// filter with return only one prize
const filterValue =  items.filter((item) => item.prize > 500)
                    .map((item) => item.prize );
// console.log("TCL: filterValue", filterValue)
// [ 600, 700, 800 ]

const filteritem = items.filter((item) =>{
    return item.prize > 250;
})
// console.log(filteritem);
// [ { name: 'b', prize: 300 },
//   { name: 'c', prize: 400 },
//   { name: 'd', prize: 500 },
//   { name: 'e', prize: 600 },
//   { name: 'f', prize: 700 },
//   { name: 'g', prize: 800 } ]


const isThereOrNot = items.map((item) =>{
    return item.prize > 400
})
// console.log(isThere);
// [ false, false, false, true, true, true, true ]


// get only prize list
const onlyPrize = items.map((item) => item.prize);
// console.log("TCL: onlyPrize", onlyPrize)
// [ 200, 300, 400, 500, 600, 700, 800 ]

const fountItem = items.find((item) =>{
    return item.prize == 200;
})
// console.log(fountItem);
// { name: 'a', prize: 200 }


// working justlike forloop. it will not retrun anything
items.forEach((item) =>{
    // console.log(item.prize)
})

// if any one of the item is true then, it will return only true or false
const isThere = items.some((item) =>{
    return item.prize > 500;
})
// console.log(isThere);
// true

// if all condition is true then only it return true or false.
const everyItem = items.every((item) =>{
    return item.prize > 500;
})
// console.log(everyItem);
// false

// it is for to add values
const total = items.reduce((previousValue, item) =>{
        return item.prize + previousValue;
}, 0)
// console.log(total);
// 3450

const sortPrize = items.sort((itme) => itme.prize )
// console.log("TCL: sortPrize", sortPrize)
// [ { name: 'a', prize: 200 },
//   { name: 'b', prize: 300 },
//   { name: 'c', prize: 400 },
//   { name: 'd', prize: 500 },
//   { name: 'e', prize: 600 },
//   { name: 'f', prize: 700 },
//   { name: 'g', prize: 800 } ]


let lowestPrize = items.sort((item) => item.prize )
                    .map((item) => `Mr ${item.name} prize is the ${ item.prize}` )[0]
                
// console.log("TCL: lowestPrize", lowestPrize)
// Mr a prize is the 200


const topThree = items.slice(0, 3);
// console.log("TCL: topThree", topThree);
// [ { name: 'a', prize: 200 },
//   { name: 'b', prize: 300 },
//   { name: 'c', prize: 400 } ]

