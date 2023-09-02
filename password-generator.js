const gen = require("generate-password");

function generateRandomPassword() {
  const password = gen.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  return password;
}
const randomPassword = generateRandomPassword();
console.log("Random Password:", randomPassword);