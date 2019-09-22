const _ = require('lodash');

const items = [
    {name:'a', prize: 200},
    {name:'b', prize: 300},
    {name:'c', prize: 400},
    {name:'d', prize: 500},
    {name:'e', prize: 600},
    {name:'f', prize: 700},
    {name:'g', prize: 800}
]

const filterValue = _.filter(items, (item) => item.prize > 500 )                       
// console.log("TCL: filterValue", filterValue);

const prizeList = _.map(items, (item) => item.prize );
// console.log("TCL: prizeList", prizeList)
// [ 200, 300, 400, 500, 600, 700,800 ]

const fountItem = _.find(items, (item) => item.prize == 400);
// console.log("TCL: fountItem", fountItem)
// { name: 'c', prize: 400 }


const isThere = _.some(items, (item) => item.prize == 450 );
// console.log("TCL: isThere", isThere)
// false

const everyItem = _.every(items, (item) => item.prize < 900 );
// console.log("TCL: everyItem", everyItem)
// true

const total = _.reduce(items, (result, item, key) =>{
    return item.prize + result;
}, 0)
// console.log("TCL: total", total)
// 3500


