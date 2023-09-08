export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {

        /* test if deck is falsy */
        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false
        }

        /* shuffle the deck and save it into shuffled */
        this.cards = this.randomShuffle(this.cards);
        return true;
    }

    /* the famous Fisher-Yates algorythm shuffle method*/
    randomShuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    draw() {

        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false
        } else {
            let card = this.cards.shift();
            return card;
        }
    }

    getCardsCount() {
        return this.cards.length;
    }

    insertAt(card = false, pos) {
        if (!Array.isArray(this.cards) || (card === false)) {
            return false
        }
        let oldDeckSize = this.cards.length;
        this.cards.splice(pos, 0, card);
        if (oldDeckSize + 1 === this.cards.length) {
            return true;
        } else {
            return false;
        }
    }
}