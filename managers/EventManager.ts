import { Server } from "http";
import * as socketio from "socket.io";
import PlayersManager from "./PlayersManager";

class EventManager {
  io: socketio.Server|null = null;
  playerSeed: number;

  constructor () {

  }

  setIo (server: Server) {
    console.log("[event] socket setup");

    this.io = new socketio.Server(server, { 
      cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"]
      }
     });

    this.io.on("connection", (socket: socketio.Socket) => {
      console.log("Connection");

      socket.on("createPlayerEvent", () => this.createPlayerEvent(socket));
      socket.on("disconnect", () => {
        PlayersManager.deletePlayerBySocketId(socket.id);
      })
    });
  }

  createPlayerEvent (socket: socketio.Socket) {
    PlayersManager.createPlayer(socket);
  }

  update () {

  }
}
export default new EventManager();
