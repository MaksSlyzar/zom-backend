import { Server } from "http";
import * as socketio from "socket.io";

class EventManager {
  io: socketio.Server|null = null;
  playerSeed: number;

  constructor () {

  }

  setIo (server: Server) {
    console.log("[event] socket setup");
    this.io = new socketio.Server(server);

    this.io.on("connection", (socket: socketio.Socket) => {
      console.log("Connection");

      socket.on("createPlayerEvent", () => this.createPlayerEvent(socket))
    });
  }

  createPlayerEvent (socket: socketio.Socket) {

  }

  update () {

  }
}
export default new EventManager();
