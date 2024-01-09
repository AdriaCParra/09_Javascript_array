import { feedMonkeys } from "./feedMonkeys";

describe("Given the feedMonkeys function", () => {
  
  test('When it receives 🍌, Then it should return ["🐒 🍌", "🦍 🍌", "🦧 🍌"]', () => {
    const fruit = "🍌";

    const result = feedMonkeys(fruit);

    expect(result).toBeDefined();
    expect(result).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });

  test('When it receives 🍎, Then it should return ["🐒 🍎", "🦍 🍎", "🦧 🍎"]', () => {
    const fruit = "🍎";

    const result = feedMonkeys(fruit);

    expect(result).toBeDefined();
    expect(result).toEqual(["🐒 🍎", "🦍 🍎", "🦧 🍎"]);
  });
});
