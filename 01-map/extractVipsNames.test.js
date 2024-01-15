import { extractVipsNames } from "./extractVipsNames";

describe("Given extractVipsNames function", () => {
  test("Given vips array, should return an array of vips names", () => {
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];
    const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const result = extractVipsNames(VIPS);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
