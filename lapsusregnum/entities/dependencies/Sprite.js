import SpritesList from "../../system/globalObjects/SpritesList.js";
class Sprite {
    constructor(name = "sprite", path, height = 30, width = 30, xpos, ypos, sx = 0, sy = 0, sw = 10, sh = 10) {
        this.path = path;
        this.name = name;
        this.xpos = xpos;
        this.ypos = ypos;
        this.height = height;
        this.width = width
        this.sprite = new Image();
        this.sprite.src = path;
        this.alreadyCalled = false;
        this.sw = sw;
        this.sh = sh;
        this.sx = sx;
        this.sy = sy;
        this.frame = 0;
        this.listForDrawing()
    }
    listForDrawing() {
        SpritesList[this.name] = {
            ...this
        }

    }
   
}
export default Sprite;