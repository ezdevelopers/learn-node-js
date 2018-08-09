const fs = require("fs");

fs.readFile("./index.html", "utf8",(err, content)=>{
    if(err) return err;
   console.log(content);
});