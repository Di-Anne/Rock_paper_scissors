//Convert JSON string back to an object and retrieve object from localStorage to use even after page refreshes
let score = JSON.parse(localStorage.getItem("score")) || { 
    wins: 0,
    losses: 0,
    ties: 0,
  };

document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
  Ties: ${score.ties}`; // Move score from alert pop-up to show on webpage

function playGame(userMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (userMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (userMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  //Update the score
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score)); //Save score object in localStorage and convert to string because localStorage can only deal with strings

  updateScoreElement () 

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You 
    <img src="${userMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon"> 
    Computer`;
}

  // Update score on webpage and place in function to reuse code
  function updateScoreElement () {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
    Ties: ${score.ties}`;
  }

function pickComputerMove() {
  const randomNum = Math.random();

  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}