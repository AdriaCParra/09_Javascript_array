/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeNames = (mates) => {
  return mates.map(
    (name) => name[0].toUpperCase() + name.slice(1).toLowerCase(),
  );
};
