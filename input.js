const stdin = process.stdin;

// setup interface to handle user input from stdin

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  // your code here
  stdin.on("data", (data) => {
     if(data === `\u0003`) {
       console.log('Ssssee you later!')
       process.exit();
     };
  });
};

stdin.on("data", handleUserInput);

module.exports = {setupInput}