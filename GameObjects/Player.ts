import {Socket} from "socket.io";

class Player {
  posX: number;
  posY: number;
  socket: Socket;

  constructor () {}

  update () {}

  networkData () {
    return {
      posX: this.posX,
      posY: this.posY
    }
  }
}

export default Player;
