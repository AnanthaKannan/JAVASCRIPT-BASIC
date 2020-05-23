

var j = 10;
for (var i = 0; i < j; i++) {
    (function(cntr) {
        asynchronousProcess(function() {
            console.log(cntr);
        });
    })(i);
}