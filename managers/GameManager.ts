import PlayerManager from "./PlayerManager";

class GameManager {
  update () {
    PlayerManager.update();

    setTimeout(() => this.update(), 25);
  }
}

export default new GameManager();
