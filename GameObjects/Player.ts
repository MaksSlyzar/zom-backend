import {Socket} from "socket.io";
import WorldObjectsManager from "../managers/WorldObjectsManager";
import CheckCollision from "../modules/Collider/CheckCollision";

class Player {
  posX: number;
  posY: number;
  socket: Socket;
  id: number;
  targetX: number;
  targetY: number;
  movespeed: number;
  globalTargetX: number;
  globalTargetY: number;

  constructor () {
    this.posX = 100;
    this.posY = 50;
    this.targetX = 0;
    this.targetY = 0;
    this.movespeed = 4;
    this.id = Math.round(Math.random() * 10000000);
  }

  update () {
    const targetX = this.targetX;
    const targetY = this.targetY;

    const rad = Math.atan2(targetY - this.posY, this.posX - targetX);

    const newPosition = {
        x: this.posX - Math.cos(rad) * this.movespeed,
        y: this.posY + Math.sin(rad) * this.movespeed
    };

    const collidedObjects = WorldObjectsManager.objects.filter(wo => {
      if (wo.collision == false)
        return false;
      

      const playerCollider = {
        x: newPosition.x,
        y: newPosition.y,
        width: 50,
        height: 50
      };

      const woCollider = {
        x: wo.posX + wo.collider.x,
        y: wo.posY + wo.collider.y,
        width: wo.collider.width,
        height: wo.collider.height
      };

      return !CheckCollision(playerCollider, woCollider);
    });

    if (collidedObjects.length > 0)
      return;

    this.posX = newPosition.x;
    this.posY = newPosition.y;


  }

  networkData () {
    return {
      posX: this.posX,
      posY: this.posY,
      id: this.id
    }
  }
}

export default Player;
