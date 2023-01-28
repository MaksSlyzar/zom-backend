"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../GameObjects/Player"));
class PlayerManager {
    constructor() {
        this.players = [];
    }
    createPlayer(socket) {
        const newPlayer = new Player_1.default();
        newPlayer.socket = socket;
        this.players.push(newPlayer);
        console.log(`[playerManager] new player`);
    }
    update() {
        this.players.map(player => {
            console.log("s");
            player.update();
        });
    }
}
exports.default = new PlayerManager();
