import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer";

describe("Given function extractCountriesWithFiveCharactersOrFewer", () => {
  test("When recieves countries array should return an array of countries with 5 or less characters", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expected = ["Italy"];

    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
