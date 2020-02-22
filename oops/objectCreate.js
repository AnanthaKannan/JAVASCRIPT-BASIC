function createElf(name, weapon){
    return {
        name, 
        weapon,
        attack(){
            return "Yes it's will attack " + name
        }
    }
}

const methodA = createElf('ananth', 'gun');
console.log(methodA.attack());
const methodB = createElf('kannan', 'bullet');
console.log(methodB.attack());

// In above section failure is methodA and methodB create
// but every mehtod have a same function. so it's will take more memory.
// so use advance of

const elfFunction = {
    attack(){
        return "Yes it's will attack " + this.name
    }
}

function createElf_(name, weapon){
    return { name, weapon }
}

const methodC = createElf_('anantha', 'gun');
methodC.attack = elfFunction.attack;
console.log(methodC.attack());
const methodD = createElf_('kannan', 'bullet');
methodD.attack = elfFunction.attack;
console.log(methodD.attack());


// Better way of programming

const elfFunction_ = {
    attack(){
        return "attact will happens using" + this.weapon;
    }
}

function createElf__(name, weapon){
    let newElf = Object.create(elfFunction);
    newElf.name = name;
    newElf.weapon = weapon;
    // console.log("newElf", newElf.__proto__);
    return newElf;
}

let methodE = createElf__('anantha', 'gun');
console.log(methodE.attack());




