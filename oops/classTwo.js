class MyClass {

    constructor(value) {
        this.value = value;
    }

    checking() {
        return 'get from checking return';
    }
}

module.exports = {
    MyClass
}


let [name, age, qualification] = ['kannan', 29, 'Engineer'];

console.log('name', name)