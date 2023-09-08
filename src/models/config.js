import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';
import BoardModel from './board';
import CemetaryModel from './cemetary';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}, {"face":"card-6"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    },
    "hand": {
        "class": HandModel,
        "param": '{"limit": 7, "cards":[]}'
    },
    "board": {
        "class": BoardModel,
        "param": '{"limit": 10, "cards":[]}'
    },
    "cemetary": {
        "class": CemetaryModel,
        "param": '{"cards":[]}'
    }
}