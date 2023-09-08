import Deck from "../src/models/deck";
import Config from "../src/models/config";

var param = JSON.parse(Config.deck.param);
const deck = new Deck(param);

describe("DECK", function () {
  describe("shuffle", function () {
    it("Sans carte dans le jeu, doit retourner faux", function () {
      deck.cards = [];
      expect(deck.shuffle()).toEqual(false);
    });
    it("Si deck est un faux tableau, doit retourner false", function () {
      deck.cards = 3;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = "test";
      expect(deck.shuffle()).toEqual(false);
      deck.cards = true;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = null;
      expect(deck.shuffle()).toEqual(false);
    });
    it("si le jeu est mélangé, doit retourner vrai", function () {
      deck.cards = ["test", "test2", "test3"];
      expect(deck.shuffle()).toEqual(true);
    });
  });

  describe("draw", function () {
    it("Doit retourner le premier test de carte dans le jeu", function () {
      deck.cards = ["test", "test2", "test3"];
      expect(deck.draw()).toBe("test");
    });
    it("Doit retourner false si le deck est vide", function () {
      deck.cards = [];
      expect(deck.draw()).toBe(false);
    });
    it("Si deck est un faux tableau, doit retourner false", function () {
      deck.cards = 3;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = "test";
      expect(deck.shuffle()).toEqual(false);
      deck.cards = true;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = null;
      expect(deck.shuffle()).toEqual(false);
    });
  });

  describe("getCardsCount", function () {
    it("Doit retourner 0 si le paquet est vide", function () {
      deck.cards = [];
      expect(deck.getCardsCount()).toBe(0);
    });
    it("Doit retourner 3 si le deck contient 3 cartes", function () {
      deck.cards = ["test", "test1", "test2"];
      expect(deck.getCardsCount()).toBe(3);
    });
    it("Si deck est un faux tableau, doit retourner false", function () {
      deck.cards = 3;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = "test";
      expect(deck.shuffle()).toEqual(false);
      deck.cards = true;
      expect(deck.shuffle()).toEqual(false);
      deck.cards = null;
      expect(deck.shuffle()).toEqual(false);
    });
  });

  describe("insertAt", function () {
    it("Doit retourner true si la fonction fonctionne", function () {
      deck.cards = ["test"];
      expect(deck.insertAt("test1", 0)).toBe(true);
    });
  });
});
