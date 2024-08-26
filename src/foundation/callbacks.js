const { SHELL, HOMEBREW_PREFIX } = process.env;

// console.table(SHELL, HOMEBREW_PREFIX);

const users = [
  {
    id: 1,
    name: "joe",
  },
  {
    id: 2,
    name: "nico",
  },
];

function getUserById(id, callback) {
  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) {
    return callback("user not found");
  }

  return callback(null, user);
}

module.exports = {
  getUserById,
};
