import Player from "../GameObjects/Player";
import { Socket } from "socket.io";

class PlayerManager {
  players: Array<Player>;

  constructor () {

  }

  createPlayer (socket: Socket) {
    const newPlayer = new Player();

    newPlayer.socket = socket;

    console.log(`[playerManager] new player`);
  }

  update () {
    this.players.map(player => {
      player.update();
    });
  }
}

export default new PlayerManager();
