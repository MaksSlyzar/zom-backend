import {Socket} from "socket.io";

class Player {
  posX: number;
  posY: number;
  socket: Socket;
  id: number;

  constructor () {
    this.posX = 100;
    this.posY = 50;
    this.id = Math.round(Math.random() * 10000000);
  }

  update () {
    this.posX += 1;
  }

  networkData () {
    return {
      posX: this.posX,
      posY: this.posY,
      id: this.id
    }
  }
}

export default Player;
