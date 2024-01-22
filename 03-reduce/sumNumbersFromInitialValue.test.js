import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("Given sumNumbersFromInitialValue", () => {
  const NUMBERS = [1, 2, 3, 4, 5];
  test("When called with NUMBERS and initial as 0, should return 15", () => {
    const initialValue = 0;

    const result = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(result).toBeDefined();
    expect(result).toBe(15);
  });
  test("When called with NUMBERS and initial as 10, should return 25", () => {
    const initialValue = 10;

    const result = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(result).toBeDefined();
    expect(result).toBe(25);
  });
});
