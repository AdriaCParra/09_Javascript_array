import { createLocalesSettings } from "./createLocalesSettings";

describe("Given createLocalesSettings", () => {
  test("When it receives ['EN', 'GR', 'FR', 'IT', 'PT'], Then it should return an object with locales settings", () => {
    // Arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const expected = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    const result = createLocalesSettings(LOCALES);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
