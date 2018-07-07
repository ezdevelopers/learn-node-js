var fs = require('fs');

var greet = fs.readFileSync(__dirname + "/greet.txt");
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt','utf8', 
//error first callback: Passes an error object as the first parameter in a callback
function(error, data){
    console.log(data);
});

console.log("Done !");