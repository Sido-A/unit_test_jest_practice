const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Sido",
    };
    user["lastName"] = "Abe";
    return user;
  },
  lessThan: (num1, num2) => num1 + num2,
  checkRegex: (word) => word,
  fetchUsers: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "Err"),
};

module.exports = functions;
