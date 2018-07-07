//Building out modules in Node.js

var english = require("./english");
var spanish = require("./spanish");

var greetr = {
  english : english,
  spanish : spanish
}

module.exports = greetr;
