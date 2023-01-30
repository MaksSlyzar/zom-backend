import Player from "../GameObjects/Player";
import { Socket } from "socket.io";

class PlayerManager {
  players: Array<Player> = [];

  constructor () {
  }

  createPlayer (socket: Socket) {
    const newPlayer = new Player();

    newPlayer.socket = socket;
    this.players.push(newPlayer);

    console.log(`[playerManager] new player`);
    newPlayer.socket.emit("playerCreated", newPlayer.networkData());
  }

  update () {
    this.players.map(player => {
      player.update();
    });
  }

  findPlayerById (id: number) {
    const players = this.players.filter(player => player.id == id);
    // console.log(players, id)
    // console.log(this.players)
    if (players.length > 0)
      return players[0];
    else 
      return null;
  }

  deletePlayerBySocketId (socketId: string) {
    this.players.map((player, index) => {
      if (player.socket.id == socketId)
        this.players.splice(index);
    })
  }
}

export default new PlayerManager();
