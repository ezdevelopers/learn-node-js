const fs = require('fs');

fs.rmdir("./newDir", (err)=>{
    if(err) return err;
    console.log("Directory has been removed");
})