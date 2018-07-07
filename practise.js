"use strict";
var util = require('util');

//Practise how Node inherits from Event Emitters

function Person(){
    this.firstname = "Eze";
    this.lastname= "Emmanuel"
}

Person.prototype.salute = function(){
    console.log(" Attention " + this.firstname + " " + this.lastname);

}
function Policeman(){
    Person.call(this);
    this.badgeNumber = 1234;
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.salute();