import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership";

describe("Given customersWhoBelongToMembership", () => {
  test("When recieves customers array should return an array with only the members of the club (member === true)", () => {
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];
    const expected = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    const result = customersWhoBelongToMembership(CUSTOMERS);

    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
