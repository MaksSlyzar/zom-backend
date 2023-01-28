"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this.posX = 100;
        this.posY = 50;
        this.id = Math.round(Math.random() * 10000000);
    }
    update() {
        this.posX += 1;
    }
    networkData() {
        return {
            posX: this.posX,
            posY: this.posY,
            id: this.id
        };
    }
}
exports.default = Player;
