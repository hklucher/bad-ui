import * as PhoneShuffleUtils from "../../utils/phoneShuffleUtils";

describe("PhoneShuffleUtils", () => {
  describe("getNextDigit", () => {
    it("returns 0 when currentDigit is null", () => {
      expect(PhoneShuffleUtils.getNextDigit(null)).toEqual(0);
    });

    it("returns 0 when currentDigit is 9", () => {
      expect(PhoneShuffleUtils.getNextDigit(9)).toEqual(0);
    });

    it("returns the incremented digit when between 0 & 9", () => {
      expect(PhoneShuffleUtils.getNextDigit(1)).toEqual(2);
    });

    it("returns 1 when current digit is 0", () => {
      expect(PhoneShuffleUtils.getNextDigit(0)).toEqual(1);
    });
  });

  describe("parsePhoneNumberFromDigits", () => {
    it("parses a full phone number", () => {
      const result = PhoneShuffleUtils.parsePhoneNumberFromDigits([
        4,
        1,
        2,
        9,
        9,
        2,
        8,
        1,
        9,
        3
      ]);

      expect(result).toEqual("412-992-8193");
    });

    it("parses a phone number with less than 3 digits", () => {
      const result = PhoneShuffleUtils.parsePhoneNumberFromDigits([
        4,
        1,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]);

      expect(result).toEqual("41");
    });

    it("parses a phone number with more than 3 but less than 7 digits", () => {
      const result = PhoneShuffleUtils.parsePhoneNumberFromDigits([
        4,
        1,
        2,
        9,
        9,
        null,
        null,
        null,
        null,
        null
      ]);

      expect(result).toEqual("412-99");
    });

    it("parses a semi-complete phone number", () => {
      const result = PhoneShuffleUtils.parsePhoneNumberFromDigits([
        5,
        3,
        3,
        3,
        2,
        4,
        4,
        null,
        null,
        null
      ]);

      expect(result).toEqual("533-324-4");
    })
  });
});
