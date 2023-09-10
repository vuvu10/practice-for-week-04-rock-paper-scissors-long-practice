const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  console.log("Available commands: ");
  console.log("  r: for Rock");
  console.log("  p: for Paper");
  console.log("  s: for Scissors");
  //console.log(" Type 'q' to quit");
  //console.log(" Type 'h' for a list of valid commands\n " );

}

function getWinner(move1, move2) {
  if (
    (move1 === "r" && move2 === "s") ||
    (move1 === "p" && move2 === "r") ||
    (move1 === "s" && move2 === "p")
  ) {
    return 1; // move1 wins
  } else if (
    (move1 === "r" && move2 === "p") ||
    (move1 === "p" && move2 === "s") ||
    (move1 === "s" && move2 === "r")
  ) {
    return -1; // move2 wins
  } else {
    return 0; // tie
  }
}




function getCPUMove() {
  // Your code here

  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  const cpu = validMoveKeys[randomIndex];
  return cpu;

}

function processMove(cmd, cpu) {
  if (cpu === 'r') {
    console.log(`You played ${cmd}. CPU played ${cpu}`);
    if (cmd === 'r') {
      console.log("You tie.");
    } else if (cmd === 'p') {
      console.log("You win!");
    } else if (cmd === 's') {
      console.log("You lose...");
    }
  } else if (cpu === 'p') {
    console.log(`You played ${cmd}. CPU played ${cpu}`);
    if (cmd === 'r') {
      console.log("You lose...");
    } else if (cmd === 'p') {
      console.log("You tie.");
    } else if (cmd === 's') {
      console.log("You win!");
    }
  } else if (cpu === 's') {
    console.log(`You played ${cmd}. CPU played ${cpu}`);
    if (cmd === 'r') {
      console.log("You win!");
    } else if (cmd === 'p') {
      console.log("You lose...");
    } else if (cmd === 's') {
      console.log("You tie.");
    }
  }
}



/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){
      let cpu = getCPUMove();
      processMove(cmd, cpu);
    } else {
      console.log("\nInvalid command.\n");
      printHelp();

    }

    promptInput(rl);
  });
}

function printHelp() {
  console.log("Available commands:");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
