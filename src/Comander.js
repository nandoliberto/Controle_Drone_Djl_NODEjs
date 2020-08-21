class Comander{

    //metodo contrutor
    constructor (socket, host, port){

        //informacoes para comunicacao com o Drone
        this.socket = socket;
        this.host = host;
        this.port = port;

    }

    //comando inicial
    sendInitCommand(){
        return new Promise((res, rej)=>{
            //enviando COMMAND para indicar ao Drone que entre no modo SDK para recebimento de comnandos
            this.socket.send('command', 0, 'command'.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando de decolar
    sendTakeoff(){
        return new Promise((res, rej)=>{
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando pousar
    sendLand(){
        return new Promise((res, rej)=>{
            this.socket.send('land', 0, 'land'.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para ir para frente, o valor passado como parametro é quantidade de CM que o drone irá se deslocar 
    sendForward(distance = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para ir para trás, o valor passado como parametro é quantidade de CM que o drone irá se deslocar 
    sendBack(distance = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para ir para direita, o valor passado como parametro é quantidade de CM que o drone irá se deslocar 
    sendRigth(distance = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`rigth ${distance}`, 0, `rigth ${distance}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para ir para esquerda, o valor passado como parametro é quantidade de CM que o drone irá se deslocar 
    sendLeft(distance = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando rotação no sentido horario, o valor passado como parametro grau em que o drone irá se deslocar 
    sendCW(degrees = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`cw ${degrees}`, 0, `cw ${degrees}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando rotação no sentido antihorario, o valor passado como parametro grau em que o drone irá se deslocar 
    sendCCW(degrees = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`ccw ${degrees}`, 0, `ccw ${degrees}`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para flip para frente
    sendFlip(){
        return new Promise((res, rej)=>{
            this.socket.send(`flip b`, 0, `flip b`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }

    //comando para veirifcar % de bateria
    getBattery(distance = 20){
        return new Promise((res, rej)=>{
            this.socket.send(`battery?`, 0, `battery?`.length, this.port, this.host, (err) =>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
            })
        })
    }
}

//exportanto a classe
module.exports = Comander