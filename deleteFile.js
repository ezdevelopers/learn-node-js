const fs = require("fs");

fs.unlink("./data.html", (err)=>{
  if(err)return err;
  console.log("File has been deleted");
});