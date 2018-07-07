var Emmiter = require('./emitter');
//Inherits from the emitter.js and exports the function to make it globally available
module.exports = class Greetr extends Emmiter{
    constructor(){
        super();
        this.greeting = "Hello World !";
    }
    greet(){
        console.log(this.greeting);
        this.emit('greet');
    }
}
