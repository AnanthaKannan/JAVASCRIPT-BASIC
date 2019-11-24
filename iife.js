// immediate invoke function expression

(function(){
    console.log("function called");
})();

(function(){
    console.log("function called two");
}());

(function(name){
    console.log(`my name is ${name}`);
})('anantha')
