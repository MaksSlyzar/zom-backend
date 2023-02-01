"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayersManager_1 = __importDefault(require("./PlayersManager"));
const WorldObjectsManager_1 = __importDefault(require("./WorldObjectsManager"));
class GameManager {
    update() {
        PlayersManager_1.default.update();
        const playersNetworkData = PlayersManager_1.default.players.map(player => player.networkData());
        PlayersManager_1.default.players.map(player => {
            const ownPlayer = PlayersManager_1.default.findPlayerById(player.id);
            const worldObjectDataMap = WorldObjectsManager_1.default.objects.filter(object => {
                if (object.networkUpdateId == object.lastUpdateId)
                    return false;
                object.networkUpdateId = object.lastUpdateId;
                return true;
            });
            player.socket.emit("updateEvent", {
                playersData: playersNetworkData.filter(_player => _player.id !== player.id),
                ownPlayerData: ownPlayer == null ? null : ownPlayer.networkData(),
                worldObjectsData: worldObjectDataMap.map(wo => wo.networkData())
            });
        });
        setTimeout(() => this.update(), 16);
    }
}
exports.default = new GameManager();
