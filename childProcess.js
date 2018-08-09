var execute = require("child_process").exec;
execute("ls", (err, content)=>{
    if(err) return err;
    console.log(content);
})