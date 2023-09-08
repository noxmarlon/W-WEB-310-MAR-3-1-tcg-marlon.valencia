import EventManager from '../eventManager';

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        super();
        this.life = life;
        this.strength = strength;
        this.def = def;
    }

    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDef() {
        return this.def;
    }

    attack(target) {
        if (typeof target !== 'object') {
            return false;
        }
        return target.recieveAttack(this);
    }

    recieveAttack(opponent = false, strikeBack = false) {
        if (strikeBack === true) {
            this.life = this.life - opponent.getDef();
            return true;
        } else {
            this.life = this.life - opponent.getStrength();
            return opponent.recieveAttack(this, true);
        }
    }
}