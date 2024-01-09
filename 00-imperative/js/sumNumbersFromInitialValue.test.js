import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("Given sumNumbersFromInitialValue function", () => {
  test("when initial value is 0 then return 15", () => {
    const values = [1, 2, 3, 4, 5];
    const initialValue = 0;

    const result = sumNumbersFromInitialValue(values, initialValue);

    expect(result).toBeDefined();
    expect(result).toBe(15);
  });

  test("when initial value is 10 then return 25", () => {
    const values = [1, 2, 3, 4, 5];
    const initialValue = 10;

    const result = sumNumbersFromInitialValue(values, initialValue);

    expect(result).toBeDefined();
    expect(result).toBe(25);
  });
});
