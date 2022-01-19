const stdin = process.stdin;
//setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;


const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
    switch (data) {
      case (`\u0003`):
        console.log('Ssssee you later!')
        process.exit();
      case ('w'):
        connection.write("Move: up")
        break;
      case ('a'):
        connection.write('Move: left')
        break;
      case ('s'):
        connection.write('Move: down')
        break;
      case ('d'):
        connection.write('Move: right')
        break;
      case ('x'):
        connection.write('Say: YOOO')
        break;
      case ('z'):
        connection.write('Say: WAZZUP')
        break;
      default:
        console.log('wrong key')
  }
};

stdin.on("data", handleUserInput);

module.exports = {setupInput}