import * as PhoneShuffleUtils from "../../utils/phoneShuffleUtils";

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
  })
});
