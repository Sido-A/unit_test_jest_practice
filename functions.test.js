const {
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} = require("@jest/globals");
const functions = require("./functions");

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

// Can add something (like checking) 'before'/'after' each tests
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//Can add something (like checking) 'before'/'after' only once per whole test
// total execution of below is only 2 times
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking name...");

// 'beforeEach' will only affect test inside 'describe' 
describe("Checking user names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// Sum of number
test("Add 2 + 2 equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Sum of number not to be
test("Add 2 + 2 equal to NOT to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// To be null
test("Should be NULL", () => {
  expect(functions.isNull()).toBeNull();
});

// To be falsy
test("Should be falsy value", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Check user
test("User should be Sido Abe object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Sido",
    lastName: "Abe",
  });
});

// Check if sum is less than 1600
test("Should be less than 1600", () => {
  expect(functions.lessThan(800, 700)).toBeLessThan(1600);
});

// Regex
test("There is no I in the word ", () => {
  expect(functions.checkRegex("Japan")).not.toMatch(/I/i);
});

// Array
test("Admin should be in usernames", () => {
  usernames = ["Sido", "Bib", "Admin"];
  expect(usernames).toContain("Admin");
});

// Async Await
test("User fetch username should be Bret", async () => {
  expect.assertions(1);
  const data = await functions.fetchUsers();
  expect(data.username).toEqual("Bret");
});

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUsers().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
