"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerManager_1 = __importDefault(require("./PlayerManager"));
class GameManager {
    update() {
        PlayerManager_1.default.update();
        setTimeout(() => this.update(), 25);
    }
}
exports.default = new GameManager();
