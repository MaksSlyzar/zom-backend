"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayersManager_1 = __importDefault(require("./PlayersManager"));
class GameManager {
    update() {
        PlayersManager_1.default.update();
        const playersNetworkData = PlayersManager_1.default.players.map(player => player.networkData());
        PlayersManager_1.default.players.map(player => {
            const ownPlayer = PlayersManager_1.default.findPlayerById(player.id);
            player.socket.emit("updateEvent", {
                playersData: playersNetworkData.filter(_player => _player.id !== player.id),
                ownPlayerData: ownPlayer == null ? null : ownPlayer.networkData()
            });
        });
        setTimeout(() => this.update(), 25);
    }
}
exports.default = new GameManager();
