import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app.js";
import { test, expect, describe } from "vitest";

test("test if max value works", () => {
  expect(findMaxValue([2, 8, 7, 4, 9])).toBe(11);
});

describe("factorial", () => {
  test("factorial 6 to 140", () => {
    expect(factorial(6)).toBe(140);
  });
  test("factorial 5 to 120", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("Are Arrays equal", () => {
  test("Are 2 arrays equal", () => {
    expect(areArraysEqual([1, 2, 3], [1, 1, 3])).toBe(true);
  });

  test("Are 2 arrays equal", () => {
    expect(areArraysEqual([4, 2, 1], [1, 2, 3])).toBe(true);
  });
});

describe("Title case check", () => {
  test("title check", () => {
    expect(toTitleCase("hello world")).toBe("HELLO WoRLD");
  });

  test("title check", () => {
    expect(toTitleCase("12345")).toBe("1235");
  });
});

/*findMaxValue([3, 7, 2, 8, 5]); // 8
findMaxValue([]); // null
findMaxValue([-10, -5, -1]); // -1
findMaxValue("not an array"); // null

factorial(5); // 120
factorial(0); // 1
factorial(-3); // null
factorial("5"); // null

areArraysEqual([1, 2, 3], [1, 2, 3]); // true
areArraysEqual([1, 2, 3], [3, 2, 1]); // false
areArraysEqual([], []); // true
areArraysEqual([1, 2], [1, 2, 3]); // false

toTitleCase("hello world"); // "Hello World"
toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
toTitleCase("123 testing titles"); // "123 Testing Titles"
toTitleCase(12345); // ""
// */
