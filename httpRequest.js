const https = require("https");
const fs = require('fs');

let url = "";

https.get(url, res=>{
    let body = "";
    res.setEncoding("utf8");
    res.on('data', data  =>{
       body += data;
    });
    res.on("end", ()=>{
        fs.writeFile("./data.json", body, "utf8",  (err)=>{
            if(err) return err;
            console.log("Data has been fetched and new file has been created");
        });
    })
});