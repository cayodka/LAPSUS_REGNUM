import HpBar from "../dependencies/HpBar.js";
import Sprite from "../dependencies/Sprite.js";
import Stats from "../dependencies/Stats.js";

class Player {
    constructor(name = "player", height = 60, width = 50, xpos = 95, ypos = 95, sx = 0, sy = 0, sw = 23.5, sh = 32) {
        this.stats = new Stats(name, 10, 3, 3, 4)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos, width);
        this.sprite = new Sprite(name, "./entities/assets/player/player_walking.png", height, width, xpos, ypos, sx, sy, sw, sh);
        this.activateControls()
    }
    activateControls() {
        const keepGoing = {
            a: true,
            d: true,
            w: true,
            s: true,
        }
        const pressedIntervals = {
            a: false,
            d: false,
            s: false,
            w: false
        }
        const pressedKeys = {
            a: false,
            d: false,
            s: false,
            w: false
        }
        window.addEventListener("keydown", (event) => {
            const key = event.key;
            switch (key) {
                case "d":
                    if (!pressedKeys.d) {
                        pressedKeys.d = true;
                        if (pressedKeys.a && keepGoing.a) {
                            keepGoing.a = false;
                        }
                        pressedIntervals.d = setInterval(() => {
                            if (keepGoing.d) {
                                this.sprite.xpos += this.stats.speed;
                                this.hpBar.xpos += this.stats.speed;
                                this.hpBar.listForDrawing()

                                this.sprite.sx = this.sprite.frame * this.sprite.sw;
                                this.sprite.sy = 32
                                this.sprite.frame > 1 ? this.sprite.frame = 0 : this.sprite.frame++;
                                
                                this.sprite.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
                case "a":
                    if (!pressedKeys.a) {
                        pressedKeys.a = true;
                        if (pressedKeys.d && keepGoing.d) {
                            keepGoing.d = false;
                        }
                        pressedIntervals.a = setInterval(() => {
                            if (keepGoing.a) {
                                this.sprite.xpos -= this.stats.speed;
                                this.hpBar.xpos -= this.stats.speed;
                                this.hpBar.listForDrawing()

                                this.sprite.sx = this.sprite.frame * this.sprite.sw;
                                this.sprite.sy = 96
                                this.sprite.frame > 1 ? this.sprite.frame = 0 : this.sprite.frame++;

                                this.sprite.listForDrawing()
                            }
                        }, 16)
                    }
                    break;

                case "w":
                    if (!pressedKeys.w) {
                        pressedKeys.w = true;
                        if (pressedKeys.s && keepGoing.s) {
                            keepGoing.s = false;
                        }
                        pressedIntervals.w = setInterval(() => {
                            if (keepGoing.w) {
                                this.sprite.ypos -= this.stats.speed;
                                this.hpBar.ypos -= this.stats.speed;
                                this.hpBar.listForDrawing()

                                this.sprite.sx = this.sprite.frame * this.sprite.sw;
                                this.sprite.sy = 0
                                this.sprite.frame > 1 ? this.sprite.frame = 0 : this.sprite.frame++;

                                this.sprite.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
                case "s":
                    if (!pressedKeys.s) {
                        pressedKeys.s = true;
                        if (pressedKeys.w && keepGoing.w) {
                            keepGoing.w = false;
                        }
                        pressedIntervals.s = setInterval(() => {
                            if (keepGoing.s) {
                                this.sprite.ypos += this.stats.speed;
                                this.hpBar.ypos += this.stats.speed;
                                this.hpBar.listForDrawing()

                                this.sprite.sx = this.sprite.frame * this.sprite.sw;
                                this.sprite.sy = 64
                                this.sprite.frame > 1 ? this.sprite.frame = 0 : this.sprite.frame++;

                                this.sprite.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
            }
        })
        window.addEventListener("keyup", (event) => {
            const key = event.key;
            switch (key) {
                case "d":
                    pressedKeys.d = false;
                    clearInterval(pressedIntervals.d)
                    if (pressedKeys.a && !keepGoing.a) {
                        keepGoing.a = true;
                    }
                    keepGoing.d = true;
                    break;
                case "a":
                    pressedKeys.a = false;
                    clearInterval(pressedIntervals.a)
                    if (pressedKeys.d && !keepGoing.d) {
                        keepGoing.d = true;
                    }
                    keepGoing.a = true;
                    break;
                case "w":
                    pressedKeys.w = false;
                    clearInterval(pressedIntervals.w)
                    if (pressedKeys.s && !keepGoing.s) {
                        keepGoing.s = true;
                    }
                    keepGoing.w = true;
                    break;
                case "s":
                    pressedKeys.s = false;
                    clearInterval(pressedIntervals.s)
                    if (pressedKeys.w && !keepGoing.w) {
                        keepGoing.w = true;
                    }
                    keepGoing.s = true;
                    break;
            }
        })
    }
}

export default Player;