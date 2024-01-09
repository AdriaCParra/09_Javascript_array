import { capitalizeNames } from "./capitalizeMates.js";

describe("Given capitalizeNames function", () => {
  test('When reciving ["john", "JACOB", "jinGleHeimer", "schmidt"] Then return ["John", "Jacob", "Jingleheimer", "Schmidt"] should return ["John", "Jacob", "Jingleheimer", "Schmidt"]', () => {
    const mates = ["john", "JACOB", "jinGleHeimer", "schmidt"];

    const result = capitalizeNames(mates);

    expect(result).toBeDefined();
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });
});
