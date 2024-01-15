import { transformSecondsToWords } from "./transformSecondsToWords";

describe("GIven transformSecondsToWords function", () => {
  test("when SECONDS array is [2, 5, 100], should reutrn ['2', '5', '100']", () => {
    const SECONDS = [2, 5, 100];

    const result = transformSecondsToWords(SECONDS);

    expect(result).toBeDefined();
    expect(result).toEqual(["2", "5", "100"]);
  });
});
