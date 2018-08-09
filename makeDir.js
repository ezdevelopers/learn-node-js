const fs = require('fs');

fs.mkdir("./newDir", (err)=>{
    if(err) return err;
    console.log("Directory has been created");
})