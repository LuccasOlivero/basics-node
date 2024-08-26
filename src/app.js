const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const reactCount = data.split(" ").filter((w) => w === "React");

const trueCount = data.match(/React/gi, "react").length; // g -> que escanee todo el archivo. i -> que sea insensible a mayúsculas y minúsculas

const { emailTemplate } = require("./foundation/template");
// console.log(emailTemplate)

const { getUserById } = require("./foundation/callbacks");

const id = 1;

getUserById(id, (err, user) => {
  if (err) throw new Error("user not found", id);
  console.log(user);
});
