const { generateUsers } = require('.')

it("generates as many users as indicated", () => {
  const actual = generateUsers(100).length;
  const expected = 100;
  expect(actual).toEqual(expected);
});

it("generates users with name and email", () => {
  const users = generateUsers(1);
  const user = users[0];
  expect(user.name).toBeDefined()
  expect(user.email).toBeDefined()
});