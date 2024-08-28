const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const reactCount = data.split(" ").filter((w: string) => w === "React");

const trueCount = data.match(/React/gi, "react").length; // g -> que escanee todo el archivo. i -> que sea insensible a mayúsculas y minúsculas

const { emailTemplate } = require("./foundation/template");
// console.log(emailTemplate)

const { getUserById } = require("./foundation/callbacks");

const id = 1;

// remider callback's
getUserById(id, (err: string, user: any) => {
  if (err) throw new Error("user not found");
  // console.log(user);
});

// usando winston usando el patron adaptador
const buildLogger = require("./foundation/logger-plugin");

const logger = buildLogger("app.js");

// logger.log("hola");
// logger.error("chau");

//
