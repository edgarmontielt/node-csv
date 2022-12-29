const readline = require("readline");
const fs = require("fs");
const { sequelize, User } = require("./model/user");

const readFile = async () => {
  await sequelize.authenticate();

  const file = readline.createInterface(fs.createReadStream("./docs/users.csv"));
  const users = [];

  file.on("line", async (line) => {
    const [name, lastName, email, city, ip] = line.split(",");
    users.push({
      name: name,
      lastName: lastName,
      email: email,
      city: city,
      ip: ip,
    });
  });

  file.on("close", async () => {
    await User.bulkCreate(users);
  });
};

readFile();
