import GameObject from "../GameObjects/GameObject";
import Tree from "../GameObjects/worldResources/Tree";

class WorldObjectsManager {
    objects: Array<GameObject> = [];

    constructor () {
        this.spawnObjects();
    }

    spawnObjects () {
        for (let i = -20; i < 20; i++) {
            for (let k = -20; k < 20; k++) {
                const newTree = new Tree();

                newTree.posX = k * 500 + Math.round(Math.random() * 200);
                newTree.posY = i * 500 + Math.round(Math.random() * 200);

                this.objects.push(newTree)
            }
        }
    }

    update () {

    }
}

export default new WorldObjectsManager();