import EventManager from "../eventManager";
import Player from './player';

export default class Game extends EventManager {
    constructor(config) {
        super();
        this.up = new Player(config);
        this.down = new Player(config);
        this.turn = '';
    }

    randTurn() {
        let rand = Math.random();
        if (rand === 0) {
            return "down";
        } else {
            return "up";
        }
    }

    getTurn() {
        if (this.turn === "up" || this.turn === "down") {
            return this.turn;
        } else {
            return this.turn = this.randTurn();
        }
    }

    changeTurn() {
        if (this.getTurn() === "up") {
            return this.turn = "down";
        } else {
            return this.turn = "up";
        }
    }

    proxy(side, action, payload = null) {
        if ((!(typeof side === "string") && (!(side === "up") || !(side === "down"))) || !(typeof action === "string")) {
            return false
        } else {
            if (payload === null) {
                if (side === "up") {
                    return this.up[action]();
                } else {
                    return this.down[action]();
                }
            } else {
                if (side === "up") {
                    return this.up[action](payload);
                } else {
                    return this.down[action](payload);
                }
            }
        }
    }
}