import express, { Express } from "express";
import { PORT } from "./config.json";
import cors from "cors";
import * as socketio from "socket.io";
import EventManager from "./managers/EventManager";


const app = express();

app.use(cors());

function runServer() {
  const server = app.listen(PORT, () => {
    console.log(`[server] runned. PORT: ${PORT}`);
  });

  EventManager.setIo(server);
}
runServer();
