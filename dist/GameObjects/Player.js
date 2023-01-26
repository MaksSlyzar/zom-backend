"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() { }
    update() { }
    networkData() {
        return {
            posX: this.posX,
            posY: this.posY
        };
    }
}
exports.default = Player;
