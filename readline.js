const readline = require('readline');
const util = require('util');
var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name)=>{
    RL.setPrompt(`${name}, how old are you? `);
    RL.prompt();
    RL.on('line',(age)=>{
        if(age < 18){
            util.log(`${name.trim()} because you are ${age}, you do not qualify for our services.`);
            RL.close();
        }else{
            util.log(`${name.trim()} because you are ${age}, you may proceed to our services.`);
            RL.close();
        }
    });
});