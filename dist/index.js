"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_json_1 = require("./config.json");
const cors_1 = __importDefault(require("cors"));
const EventManager_1 = __importDefault(require("./managers/EventManager"));
const GameManager_1 = __importDefault(require("./managers/GameManager"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
function runServer() {
    const server = app.listen(config_json_1.PORT, () => {
        console.log(`[server] runned. PORT: ${config_json_1.PORT}`);
    });
    EventManager_1.default.setIo(server);
    GameManager_1.default.update();
}
runServer();
