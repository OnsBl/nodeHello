const fs = require("fs");
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("Data from 'hello.txt':");
    console.log(data);
  }
});