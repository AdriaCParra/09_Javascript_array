import { getLongWords } from "./getLongWords";

describe("Given getLongWords", () => {
  test('When it recieves LANGUAGES array it should return ["JavaScript", "TypeScript"]', () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected = ["JavaScript", "TypeScript"];

    const result = getLongWords(LANGUAGES);

    expect(result).toBeDefined();
    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });
  test('When it recieves BEATLES array it should return ["George", "Ringo"]', () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expected = ["George", "Ringo"];

    const result = getLongWords(BEATLES);

    expect(result).toBeDefined();
    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });
});
