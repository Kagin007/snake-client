const { builtinModules } = require("module");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write("Name: ACS")
    setTimeout(()=> conn.write("Move: up"), 100)
  })

    conn.on('data', (input) => {
    console.log(input)
  })

  return conn;
}

module.exports = {connect}

// rl.question('Whats you name? Nicknames are also cool: ',
// (answer1) => {
//   rl.question('Whats an activity you like doing? : ',
//   (answer2) => {
//     rl.question('What do you listen to while doing that?: ',