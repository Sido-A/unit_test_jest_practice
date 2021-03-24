const { expect } = require("@jest/globals");
const isAnagram = require("./anagram");

test("isAnagram function exist", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is anagram of 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("Dormitory is anagram of 'dirty room##'", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("Hello is no anagram of Aloha", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
