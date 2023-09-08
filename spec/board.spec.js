import config from '../src/models/config';
import Board from '../src/models/board';

let param = JSON.parse(config.hand.param);
const board = new Board(param);

describe('BOARD', function () {

    describe('addCard', function () {
        it('Must return true if everything is fine', function () {
            board.cards = ['test1', 'test2', 'test3'];
            expect(board.addCard('test')).toBe(true);
        });
        it('Must return false if board is full', function () {
            board.cards = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'];
            expect(board.addCard('test')).toBe(false);
        });
    });

    describe('removeCard', function () {
        it('Must return false if no card in deck', function () {
            board.cards = [];
            expect(board.removeCard(0)).toBe(false);
        });
        it('Must return test1 if card number to be removed is 1', function () {
            board.cards = ['test', 'test1', 'test2'];
            expect(board.removeCard(1)).toBe('test1');
        });
        it('Must return false if card number to be removed is greater than the number of card in deck', function () {
            board.cards = ['test', 'test1', 'test2'];
            expect(board.removeCard(4)).toBe(false);
        });
    });

    describe('getAllCards', function () {
        it('Must return an array with 1 card test', function () {
            board.cards = ['test'];
            expect(board.getAllCards()).toEqual(['test']);
        });
    });

    describe('getCardsCount', function () {
        it('Must return the number of cards in deck', function () {
            board.cards = ['test', 'test1', 'test2'];
            expect(board.getCardsCount()).toEqual(3);
            board.cards = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'];
            expect(board.getCardsCount()).toEqual(7);
        })
    })
});