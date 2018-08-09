var fs = require("fs");

fs.writeFile("./data.html","Hello world","utf8",(err)=>{
    if(err)return err;
});