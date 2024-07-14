import HpBar from "../dependencies/HpBar.js";
import Sprite from "../dependencies/Sprite.js";
import Stats from "../dependencies/Stats.js";
import random from "../../system/testing/Random.js";

class Fantasma {
    constructor(name = "fantasma", height = 20, width = 20, xpos = random.X(50), ypos = random.Y(50)) {
        this.stats = new Stats(name, 15, 20, 10)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos, width);
        this.sprite = new Sprite(name, "./entities/assets/fantasma.png", height, width, xpos, ypos);
    }
}

export default Fantasma;