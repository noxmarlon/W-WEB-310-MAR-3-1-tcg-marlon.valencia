import ModelFactory from "./factory";
import Pawn from "./pawn";
import Board from "./board";
import Cemetary from "./cemetary";
import Deck from "./deck";
import Hand from "./hand";

export default class Player extends Pawn {
  constructor(config, life, strength, def) {
    super(life, strength, def);
    this.type = config.type;

    this.deck = ModelFactory.get("deck");
    this.hand = ModelFactory.get("hand");
    this.board = ModelFactory.get("board");
    this.cemetary = ModelFactory.get("cemetary");
  }

  shuffle(deck = "deck") {
    if (deck === "deck") {
      return this.deck.shuffle();
    } else if (deck === "cemetary") {
      return this.cemetary.shuffle();
    } else {
      return false;
    }
  }

  draw() {
    return this.deck.draw();
  }

  playCard(pos) {
    return this.board.addCard(this.hand.removeCard(pos));
  }

  discard(pos) {
    return this.cemetary.insertAt(this.hand.removeCard(pos), 0);
  }

  attack(pos, target) {
    if (typeof this.board.cards[pos] !== "object") {
      return false;
    }
    const attacker = new Pawn(
      this.board.cards[pos].life,
      this.board.cards[pos].strength,
      this.board.cards[pos].def
    );
    return attacker.attack(target);
  }
}
