import Pawn from '../src/models/pawn';

const pawn1 = new Pawn(10, 5, 2);
const pawn2 = new Pawn(10, 5, 2);

describe('PAWN', function () {
    describe('getLife', function () {
        it("Must return the correct value of life", function () {
            expect(pawn1.getLife()).toBe(10);
        });
    });
    describe('getStrength', function () {
        it("Must return the correct value of strength", function () {
            expect(pawn1.getStrength()).toBe(5);
        });
    });
    describe('getDef', function () {
        it("Must return the correct value of def", function () {
            expect(pawn1.getDef()).toBe(2);
        });
    });
    describe('recieveAttack', function () {
        it("must return true", function () {
            expect(pawn1.recieveAttack(pawn2)).toBe(true);
        });
    });
});