/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "US": {id: 1, enabled: false},
 *  "EN": {id: 2, enabled: false},
 *  "EN": {id: 3, enabled: false},
 *  "EN": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "US", "EN", "EN", "EN"];

export const createLocalesSettings = (locales) => {
  return locales.reduce((acc, locale, index) => {
    const object = {};
    object[locale] = {
      id: index,
      enabled: index === 0,
    };
    acc.push(object);
    return acc;
  }, []);
};
