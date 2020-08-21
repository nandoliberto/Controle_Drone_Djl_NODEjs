//instanciando modulos nativos 
const readLine = require('readline');
const { createSocket } = require('dgram');

//instanciando as classes 
const CommandParser = require('./ComanderParser');
const Commander = require('./Comander');

//criando interface de interacao com usuario atraves do terminal 
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//informacoes de host e porta para comunicação com o drone
const TELLO_CMD_PORT = 8889;
const TELLO_HOST = '182.168.10.1'

const getSocket = ()=>{
    const socket = createSocket('udp4');
    socket.bind(TELLO_CMD_PORT);
    return socket
}

//funcao para iniciar todo o processo
(async function start(){

    //pegando a execução da função getSocket
    const socket = getSocket()

    //invocando a clase Commander e repassando parametro para metodo construtor desta classe
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    
    //iniciando o drone
    await cmder.sendInitCommand();

    //invocando cada possivel comando que o drone podera receber
    const cmdp = new CommandParser({
        onTakeoff: async()=>{await cmder.sendTakeoff()},
        onLand: async()=>{await cmder.sendLand()},
        onForward: async(dist)=>{await cmder.sendForward(dist)},
        onBack: async(dist)=>{await cmder.sendBack(dist)},
        onRight: async(dist)=>{await cmder.sendRight(dist)},
        onLeft: async(dist)=>{await cmder.sendLeft(dist)},
        onCW: async(dist)=>{await cmder.sendCW(dist)},
        onCCW: async(dist)=>{await cmder.sendCCW(dist)},
        onFlip: async()=>{await cmder.sendFlip()},
        onBattery: async()=>{await cmder.getBattery()}
    })

    //no sucesso retornara no terminal essa msg
    console.log('Iniciando');
    
    //monstrar a msg recebida como comando
    socket.on('message', (msg)=>{
        console.log(`Dji tello: ${msg.toString()}`);
    })
    
    //em caso de problemas com o drone
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err}`);
    })
    
    //em caso de sucesso msg de executando
    socket.on('listening', ()=>{
        console.log(`Sokect is listening!`);
    })

    console.log('Enter a command: ');

    //recebendo os comandos digitados no terminal
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            
            //comando para desconect com o drone
            if(line == 'exit'){
                console.log('Bye');
                process.exit(0)
            }

            //em caso de comandos invalidos
            console.log('Not a valid commad');
        }
    })

})()