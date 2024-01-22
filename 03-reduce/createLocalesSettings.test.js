import { createLocalesSettings } from "./createLocalesSettings";

describe("Given createLocalesSettings", () => {
  test("When it receives ['EN', 'US', 'EN', 'EN', 'EN'], Then it should return an object with locales settings", () => {
    // Arrange
    const locales = ["EN", "US", "EN", "EN", "EN"];
    const expected = [
      { EN: { id: 0, enabled: true } },
      { US: { id: 1, enabled: false } },
      { EN: { id: 2, enabled: false } },
      { EN: { id: 3, enabled: false } },
      { EN: { id: 4, enabled: false } },
    ];

    const result = createLocalesSettings(locales);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
