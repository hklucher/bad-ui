import * as ScrabbleUtils from "../../utils/scrabbleUtils";

describe("ScrabbleUtils", () => {
  describe("getScrabbleScore", () => {
    it("returns 0 given an empty string", () => {
      const result = ScrabbleUtils.getScrabbleScore("");

      expect(result).toEqual(0);
    });

    it("returns the correct scrabble score", () => {
      const result = ScrabbleUtils.getScrabbleScore("TEST");

      expect(result).toEqual(4);
    });

    it("returns the correct score for an all lowercase word", () => {
      const result = ScrabbleUtils.getScrabbleScore("test");

      expect(result).toEqual(4);
    });

    it("returns the correct score for a mixed-case word", () => {
      const result = ScrabbleUtils.getScrabbleScore("pIzZa");

      expect(result).toEqual(25);
    });

    it("returns the correct score when accounting for whitespaces", () => {
      const result = ScrabbleUtils.getScrabbleScore("test test");

      expect(result).toEqual(8);
    });

    it("returns the corect score when accounting for special characters", () => {
      const result = ScrabbleUtils.getScrabbleScore("@password");

      expect(result).toEqual(14);
    });
  });
});
