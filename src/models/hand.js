export default class Hand {
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit;
    }

    addCard(card = false) {
        if (!Array.isArray(this.cards) || (this.cards.length === this.limit) || (card === false)) {
            return false
        }
        if (!this.cards.length) {
            var oldSize = 0;
        } else {
            var oldSize = this.cards.length;
        }
        let newSize = this.cards.push(card);
        if (oldSize === (newSize - 1) && this.cards[(this.cards.length) - 1] === card) {
            return true;
        } else {
            return false;
        }
    }

    removeCard(pos) {
        if (!Array.isArray(this.cards) || !(pos >= 0 && pos < this.cards.length)) {
            return false
        }
        let card = this.cards.splice(pos, 1);
        return card[0];
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}