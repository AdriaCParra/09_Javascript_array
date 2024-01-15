import { getLongWords } from "./getLongWords";

describe("Given the getLongWords function", () => {
  test('When it receives LANGUAGES, Then it should return ["JavaScript", "TypeScript"]', () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

    const result = getLongWords(LANGUAGES);

    expect(result).toBeDefined();
    expect(result).toEqual(["JavaScript", "TypeScript"]);
  });

  test('When it receives BEATLES, Then it should return ["George", "Ringo"]', () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];

    const result = getLongWords(BEATLES);

    expect(result).toBeDefined();
    expect(result).toEqual(["George", "Ringo"]);
  });
});
