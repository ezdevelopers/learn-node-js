"use strict";
var Greetr = require('./greetr')
var greetr = new Greetr();

 greetr.on('greet', function(){
   console.log("Someone greeted");
 });

//  console.log("Hello");
 greetr.greet();
