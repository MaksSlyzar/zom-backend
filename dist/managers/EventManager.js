"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = __importStar(require("socket.io"));
const PlayersManager_1 = __importDefault(require("./PlayersManager"));
class EventManager {
    constructor() {
        this.io = null;
    }
    setIo(server) {
        console.log("[event] socket setup");
        this.io = new socketio.Server(server, {
            cors: {
                origin: "http://localhost:4000",
                methods: ["GET", "POST"]
            }
        });
        this.io.on("connection", (socket) => {
            console.log("Connection");
            socket.on("createPlayerEvent", () => this.createPlayerEvent(socket));
            socket.on("disconnect", () => {
                PlayersManager_1.default.deletePlayerBySocketId(socket.id);
            });
        });
    }
    createPlayerEvent(socket) {
        PlayersManager_1.default.createPlayer(socket);
    }
    update() {
    }
}
exports.default = new EventManager();
