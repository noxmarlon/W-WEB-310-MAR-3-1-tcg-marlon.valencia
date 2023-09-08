import Player from '../src/models/player';
import config from '../src/models/config';
import Pawn from '../src/models/pawn';

let param = JSON.parse(config.player.param);
const player = new Player(param);
const test1 = {
    life: 10,
    strength: 20,
    def: 30
};
const test2 = {
    life: 30,
    strength: 20,
    def: 10
};
const test3 = {
    life: 20,
    strength: 30,
    def: 10
};

describe('PLAYER', function () {
    describe('shuffle', function () {
        it('Shuffle on player deck must return true', function () {
            player.deck.cards = [test1, test2, test3];
            expect(player.shuffle()).toBe(true);
        });
        it('Shuffle on player cemetary must return true', function () {
            player.cemetary.cards = [test1, test2, test3];
            expect(player.shuffle('cemetary')).toBe(true);
        });
        it('Shuffle function with another string than deck or cemetary return false', function () {
            expect(player.shuffle('test')).toBe(false);
        });
    });

    describe('draw', function () {
        it('Draw must return the first card of the player deck', function () {
            player.deck.cards = [test1, test2, test3];
            expect(player.draw()).toEqual(Object({
                life: 10,
                strength: 20,
                def: 30
            }));
        });
        it('Or must return false if deck is empty', function () {
            player.deck.cards = [];
            expect(player.draw()).toBe(false);
        });
    });

    describe('playCard', function () {
        it('Must return true if card from hand is played on board', function () {
            player.board.cards = [];
            player.hand.cards = [test1, test2, test3];
            expect(player.playCard(0)).toBe(true);
        });
        it('Must return false if card pos is incorrect', function () {
            player.board.cards = [];
            player.hand.cards = [test1, test2, test3];
            expect(player.playCard(3)).toBe(false);
        });
        it('Must return false if hand is empty', function () {
            player.board.cards = [test1, test2, test3];
            player.hand.cards = [];
            expect(player.playCard(0)).toBe(false);
        });
    });

    describe('discard', function () {
        it('Must return true if card is discarded from hand into cemetary', function () {
            player.cemetary.cards = [];
            player.hand.cards = [test1, test2, test3];
            expect(player.discard(2)).toBe(true);
        });
        it('Must return false if card pos is incorrect', function () {
            player.cemetary.cards = [];
            player.hand.cards = [test1, test2, test3];
            expect(player.discard(3)).toBe(false);
        });
        it('Must return false if hand is empty', function () {
            player.cemetary.cards = [test1, test2, test3];
            player.hand.cards = [];
            expect(player.discard(0)).toBe(false);
        });
    });

    describe('attack', function () {
        it('Must return true if attack is successfull', function () {
            player.board.cards = [test1, test2, test3];
            const target = new Pawn(20, 20, 20);
            expect(player.attack(2, target)).toBe(true);
        });
        it('Must return false if has no target', function () {
            player.board.cards = [test1, test2, test3];
            let target2;
            expect(player.attack(1, target2)).toBe(false);
        });
        it('Must return false if attacker do not exist', function () {
            player.board.cards = [];
            const target = new Pawn(20, 20, 20);
            expect(player.attack(0, target)).toBe(false);
            player.board.cards = [test1, test2, test3];
            expect(player.attack(4, target)).toBe(false);
        });
    });
});