import PlayersManager from "./PlayersManager";

class GameManager {
  update () {
    PlayersManager.update();

    const playersNetworkData = PlayersManager.players.map(player => player.networkData());

    PlayersManager.players.map(player => {
      const ownPlayer = PlayersManager.findPlayerById(player.id);

      player.socket.emit("updateEvent", {
        playersData: playersNetworkData.filter(_player =>  _player.id !== player.id ),
        ownPlayerData: ownPlayer==null? null: ownPlayer.networkData()
      });
    });

    setTimeout(() => this.update(), 25);
  }
}

export default new GameManager();
