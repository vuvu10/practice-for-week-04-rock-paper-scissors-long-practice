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

  console.log("  Type 'r' for Rock ");
  console.log("  Type 'p' for Paper ");
  console.log("  Type 's' for Scissors ");
  console.log(" Type 'q' to quit ");
  console.log(" Type 'h' for a list of valid commands\n ");


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
  //const cpu = validMoveKeys[randomIndex];
  //return cpu;
  return validMoveKeys[randomIndex];

}

function processMove(cmd, cpu) {

  if (cmd === 'h') {
    printHelp();

  } else if (cmd === 'q') {

  } else if (VALID_MOVES[cmd]) {
    console.log(`You pick ${cmd}, computer picks ${cpu}.`);
    if (cmd === cpu) {
      console.log("You tie.\n");
      ties++;
    } else if (VALID_MOVES[cmd].winsAgainst === cpu) {
      console.log("You win!\n");
      wins++;

    } else {
      console.log("You lose...\n");
      losses++;
    }
  } else {
    console.log("\nInvalid command.\n");
    printHelp();
  }



 /*  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  const result = getWinner(cmd, cpu);

  if (result === 0) {
    console.log("You tie.\n");
    ties++;
  } else if (result === 1) {
    console.log("You win!\n");
    wins++;
  } else {
    console.log("You lose...\n");
    losses++;
  } */

}



/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");

      console.log("  Type 'r' for Rock ");
      console.log("  Type 'p' for Paper ");
      console.log("  Type 's' for Scissors ");
      console.log(" Type 'q' to quit ");
      console.log(" Type 'h' for a list of valid commands\n ");



    } else if (cmd === 'q') {
      rl.close();
      return;

    } else if (VALID_MOVES[cmd]){
      const validMoveKeys = Object.keys(VALID_MOVES);
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      const cpu = validMoveKeys[randomIndex];

      console.log(`You pick ${cmd}, computer picks ${cpu}.`);

    if (cmd === cpu) {
      console.log("You tie.\n");
      ties++;
    }

    else if(VALID_MOVES[cmd].winsAgainst === cpu) {
      console.log("You win!\n");
      wins++;

    } else {
      console.log("You lose...\n");
      losses++;

    }

  } else {
      console.log("\nInvalid command.\n");
      console.log("  Type 'r' for Rock ");
      console.log("  Type 'p' for Paper ");
      console.log("  Type 's' for Scissors ");
      console.log(" Type 'q' to quit ");
      console.log(" Type 'h' for a list of valid commands\n ");


    }

    promptInput(rl);
  });
}



/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");

  printHelp();

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
