import config from "../src/models/config";
import Hand from "../src/models/hand";

let param = JSON.parse(config.hand.param);
const hand = new Hand(param);

describe("HAND", function () {
  describe("addCard", function () {
    it("Must return true if everything is fine", function () {
      hand.cards = ["test1", "test2", "test3"];
      expect(hand.addCard("test")).toBe(true);
    });
    it("Must return false if hand is full", function () {
      hand.cards = [
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
        "test7",
      ];
      expect(hand.addCard("test")).toBe(false);
    });
  });

  describe("removeCard", function () {
    it("Must return false if no card in deck", function () {
      hand.cards = [];
      expect(hand.removeCard(0)).toBe(false);
    });
    it("Must return test1 if card number to be removed is 1", function () {
      hand.cards = ["test", "test1", "test2"];
      expect(hand.removeCard(1)).toBe("test1");
    });
    it("Must return false if card number to be removed is greater than the number of card in deck", function () {
      hand.cards = ["test", "test1", "test2"];
      expect(hand.removeCard(4)).toBe(false);
    });
  });

  describe("getAllCards", function () {
    it("Must return an array with 1 card test", function () {
      hand.cards = ["test"];
      expect(hand.getAllCards()).toEqual(["test"]);
    });
  });

  describe("getCardsCount", function () {
    it("Must return the number of cards in deck", function () {
      hand.cards = ["test", "test1", "test2"];
      expect(hand.getCardsCount()).toEqual(3);
      hand.cards = [
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
        "test7",
      ];
      expect(hand.getCardsCount()).toEqual(7);
    });
  });
});
