import { getEvensOnly } from "./getEvensOnly";

describe("Given getEvensOnly", () => {
  test("When recieves a numbers array it should return a new array with only the even numbers", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const expected = [2, 12, 42, 28];

    const result = getEvensOnly(COUNTERS);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
