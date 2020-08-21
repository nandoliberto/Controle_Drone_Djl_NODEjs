class CommanderParser{

    //metodo construtor
    constructor(drone){

        //recuperando o camando de instrução digitada e verificando qual é o comando e redirecionando para a função correta
        //e repassar o comando ao Drone
        this.parseCommand = function parseCommand(line){

            if(line == 'takeoff'){
                drone.onTakeoff();
                return true;
            }

            if(line == 'land'){
                drone.onLand();
                return true;
            }

            if(line.startsWith('forward')){
                const [,dist] = line.split(" ");
                drone.onForward(dist);
                return true;
            }

            if(line.startsWith('back')){
                const [,dist] = line.split(" ");
                drone.onBack(dist);
                return true;
            }

            if(line.startsWith('right')){
                const [,dist] = line.split(" ");
                drone.onRight(dist);
                return true;
            }

            if(line.startsWith('left')){
                const [,dist] = line.split(" ");
                drone.onLeft(dist);
                return true;
            }
            if(line.startsWith('cw')){
                const [,dist] = line.split(" ");
                drone.onCW(dist);
                return true;
            }
            if(line.startsWith('ccw')){
                const [,dist] = line.split(" ");
                drone.onCCW(dist);
                return true;
            }

            if(line == 'battery'){
                drone.onBattery(line);
                return true;
            }

            if(line == 'flip'){
                drone.onFlip(line);
                return true;
            }

            return false;
        }
    }
}

//exportando a classe
module.exports = CommanderParser