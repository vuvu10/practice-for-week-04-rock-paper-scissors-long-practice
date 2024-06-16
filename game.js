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
let gameState = {
  wins: 0,
  losses: 0,
  ties: 0,
};

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {

  const helpMessages = [

  "  Type 'r' for Rock ",
  "  Type 'p' for Paper ",
  "  Type 's' for Scissors ",
  " Type 'q' to quit ",
  " Type 'h' for a list of valid commands\n"
];
helpMessages.forEach(message => console.log(message));

}

function getWinner(move1, move2) {
  if (move1 === move2) return 0;
  if (
    (move1 === "r" && move2 === "s") ||
    (move1 === "p" && move2 === "r") ||
    (move1 === "s" && move2 === "p")
  ) return 1;
  return -1; 
}




function getCPUMove() {
  // Your code here

  const moves = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];

/*  
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  //const cpu = validMoveKeys[randomIndex];
  //return cpu;
  return validMoveKeys[randomIndex];
*/

}

function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  
  const outcome = getWinner(cmd, cpu);
  if(outcome === 1) {
    console.log("You win!\n");
    gameState.wins++;

  } else if (outcome === -1) {
    console.log("You lose...\n");
    gameState.losses++;

  } else {
    console.log("You tie.\n");
    gameState.ties++;
  }

}



/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${gameState.wins} wins - ${gameState.losses} losses - ${gameState.ties} ties`);
  rl.question('> ', cmd => {
    if (cmd === 'q') {
      rl.close();
      return;
    }

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();

    } else if (!VALID_MOVES[cmd]) {
      console.log("\nInvalid command.\n");
      printHelp();

    } else {
      const cpuMove = getCPUMove();
      processMove(cmd, cpuMove);

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
