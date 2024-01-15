/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = (fruit) => {
  let monkeys = [];
  let MONKEYSlenght = MONKEYS.length;

  for (let index = 0; index < MONKEYSlenght; index++) {
    const fusion = `${MONKEYS[index]} ${fruit}`;
    monkeys.push(fusion);
  }

  return monkeys;
};
