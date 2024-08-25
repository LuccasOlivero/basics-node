const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const reactCount = data.split(" ").filter((w) => w === "React");

const trueCount = data.match(/React/gi, "react").length;
