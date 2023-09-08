import Game from "../src/models/game";
import Config from "../src/models/config";
import Player from '../src/models/player';

var param = JSON.parse(Config.game.param);
const game = new Game(param);
const player = new Player(param);

const getAllMethods = (obj) => {
    let props = []

    do {
        const l = Object.getOwnPropertyNames(obj)
            .concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
            .filter((p, i, arr) =>
                typeof obj[p] === 'function' && //only the methods
                p !== 'constructor' && //not the constructor
                (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                props.indexOf(p) === -1 //not overridden in a child
            )
        props = props.concat(l)
    }
    while (
        (obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
        Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
    )

    return props
}

describe('GAME', function () {
    describe('getTurn', function () {
        it('Must return a string', function () {
            expect(typeof game.getTurn()).toEqual('string');
        });
    });
    describe('changeTurn', function () {
        it('Must return a string', function () {
            expect(typeof game.changeTurn()).toEqual('string');
        })
    });
    describe('proxy', function () {
        let playerMethods = [];
        playerMethods = getAllMethods(player);
        playerMethods.splice(-6, 6);
        console.log(playerMethods);
        playerMethods.forEach(element => {
            it(element + ' must be called', function () {
                spyOn(game.up, element).and.callThrough();
                game.proxy('up', element, 'test');
                expect(game.up[element]).toHaveBeenCalled();
            });
        });
    });
});