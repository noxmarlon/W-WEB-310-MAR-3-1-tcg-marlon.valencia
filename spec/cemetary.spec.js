import Config from '../src/models/config';
import Cemetary from '../src/models/cemetary';

var param = JSON.parse(Config.deck.param);
const cemetary = new Cemetary(param);

describe('CEMETARY', function () {
    describe('shuffle', function () {
        it('Without card in cemetary, must return false', function () {
            cemetary.cards = [];
            expect(cemetary.shuffle()).toEqual(false);
        });
        it('If cemetary is a falsy array, must return false', function () {
            cemetary.cards = 3;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = 'test';
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = true;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = null;
            expect(cemetary.shuffle()).toEqual(false);
        });
        it('if cemetary is shuffled, must return true', function () {
            cemetary.cards = ['test', 'test2', 'test3'];
            expect(cemetary.shuffle()).toEqual(true);
        })
    });

    describe('draw', function () {
        it('Must return the first card test in the cemetary', function () {
            cemetary.cards = ['test', 'test2', 'test3'];
            expect(cemetary.draw()).toBe('test');
        });
        it('Must return false if cemetary is empty', function () {
            cemetary.cards = [];
            expect(cemetary.draw()).toBe(false);
        });
        it('If cemetary is a falsy array, must return false', function () {
            cemetary.cards = 3;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = 'test';
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = true;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = null;
            expect(cemetary.shuffle()).toEqual(false);
        });
    });

    describe('getCardsCount', function () {
        it('Must return 0 if cemetary is empty', function () {
            cemetary.cards = [];
            expect(cemetary.getCardsCount()).toBe(0);
        });
        it('Must return 3 if cemetary has 3 cards', function () {
            cemetary.cards = ['test', 'test1', 'test2'];
            expect(cemetary.getCardsCount()).toBe(3);
        });
        it('If cemetary is a falsy array, must return false', function () {
            cemetary.cards = 3;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = 'test';
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = true;
            expect(cemetary.shuffle()).toEqual(false);
            cemetary.cards = null;
            expect(cemetary.shuffle()).toEqual(false);
        });
    });

    describe('insertAt', function () {
        it('Must return true if function working', function () {
            cemetary.cards = ['test'];
            expect(cemetary.insertAt('test1', 0)).toBe(true);
        });
    });
});