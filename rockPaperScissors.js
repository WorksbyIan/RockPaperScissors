// Welcome to the game
console.log('Hello!');
console.log('Welcome to a game of Rock, Paper, Scissors.');
console.log('On the count of 3, pick your hand.');
console.log('1');
console.log('2');
console.log('3');

// User Input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Sorry, you must choose only Rock, Paper, or Scissors');
  }
}

// Computer Input
const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 0) {
  return 'rock';
} else if (computerChoice === 1) {
  return 'paper';
} else {
  return 'scissors';
}
}

// Compare choices and declare winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie game! Try again.';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You win! Your rock breaks scissors.';
    } else {
      return 'You lose! Paper covers your rock.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win! Your paper covers rock.';
    } else {
      return 'You lose! Scissors cut your paper.';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Win! Your scissors cut paper.';
    } else {
      return 'You lose! Rock breaks your scissors.';
    }
  }
}

// Run program and display results
const playGame = () => {
  const userChoice = getUserChoice('paper');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
