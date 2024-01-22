import { getWordFromValues } from "./getWordFromValues";

describe("Given getWordFromValues", () => {
  test("When called with VALUES, should return '123'", () => {
    const VALUES = [1, 2, 3];
    const expected = "123";

    const result = getWordFromValues(VALUES);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
