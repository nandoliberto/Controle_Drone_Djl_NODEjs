const readline = require('readline');
const { read } = require('fs');
const { stdout } = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qual a melhor marca de drone na sua opiniao?', (answer)=>{
    console.log(`a melhor marca é: ${answer}`);

    switch(answer){
        case "command":
            console.log('Ligando o Drone');
            break
        case "takeoff":
            console.log('Decolando o drone');
            break
        default:
            console.log('obrigado pela resposta/comando');
    }   

    rl.close()
})