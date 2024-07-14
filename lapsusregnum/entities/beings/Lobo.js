import HpBar from "../dependencies/HpBar.js";
import Sprite from "../dependencies/Sprite.js";
import Stats from "../dependencies/Stats.js";
import random from "../../system/testing/Random.js";

class Lobo {
    constructor(name = "lobo", height = 40, width = 20, xpos = random.X(50), ypos = random.Y(50)) {
        this.stats = new Stats(name, 20, 15, 25)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos, width);
        this.sprite = new Sprite(name, "./entities/assets/Lobo.png", height, width, xpos, ypos);
    }
}

export default Lobo;