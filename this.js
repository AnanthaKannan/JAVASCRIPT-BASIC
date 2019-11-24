// 1. gives methods access to their object

const obj = {
    name:"anntha",
    sing(){
        return `lalalal ${this.name}`
    },
    singing(){
        return this.sing() + "...!";
    }
}

console.log(obj.sing());
console.log(obj.singing());