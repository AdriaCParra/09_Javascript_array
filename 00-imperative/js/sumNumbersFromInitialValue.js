/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

export function sumNumbersFromInitialValue(values, initialValue) {
  let sum = initialValue;
  const valuesLenght = values.length;

  for (let i = 0; i < valuesLenght; i++) {
    sum += values[i];
  }

  return sum;
}
