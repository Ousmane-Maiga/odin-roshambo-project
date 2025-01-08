// The function that return the computer choice.
function getComputerChoice() {
    let computerChoices = "";
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1) {
      computerChoices = 'Rock';
    } else if(randomNumber === 2) {
        computerChoices = 'Paper';
    } else {
        computerChoices = 'Scissor';
    }
    return computerChoices;
}

// The function that return the human choice.
function getHumanChoice() {
  const word = roshamboField.value;
  let humanChoices = "";
  if (word.toLowerCase() === 'rock') {
    humanChoices = 'rock';
  } else if (word.toLowerCase() === 'paper') {
    humanChoices = 'paper';
  } else if (word.toLowerCase() === 'scissor') {
    humanChoices = 'scissor';
  } 

  return humanChoices;
}
// this function take the choice of both the human and the computer
//display the choice of the human in front of human text
//display the choice of the computer in front of computer text
//and then display the photo related to the choice

function playChoice(humanPlayChoice, computerPlayChoice) {
  humanChoiceHeaderImg.style.display = 'block';
  humanChoiceHeader.textContent = 'Human: ' + humanPlayChoice;
  humanChoiceImg.setAttribute('src', `./images/${humanPlayChoice}.jpeg`);
  computerChoiceHeaderImg.style.display = 'block';
  computerChoiceHeader.textContent = 'Computer: ' + computerPlayChoice;
  computerChoiceImg.setAttribute('src', `./images/${computerPlayChoice}.jpeg`);
 
}
// retreiving the necessary DOM element that we will use in the game
const roshamboField = document.querySelector('.roshamboField');
const roshamboBtn = document.querySelector('.roshamboBtn');
const paras = document.querySelector('.paras');
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner');
const hcChoiceImg = document.querySelector('.humanComputerChoiceHeaderImg')
const humanChoiceHeaderImg = document.querySelector('.humanChoiceHeaderImg');
const computerChoiceHeaderImg = document.querySelector('.computerChoiceHeaderImg')
const humanChoiceHeader = document.querySelector('.humanChoiceHeader')
const computerChoiceHeader = document.querySelector('.computerChoiceHeader')
const humanChoiceImg = document.querySelector('.humanChoiceImg')
const computerChoiceImg = document.querySelector('.computerChoiceImg')
const container = document.querySelector('.container');

//initialized variables
let humanScore = 0;
let computerScore = 0;

// store the function return value to these variables
const humanSeclection = getHumanChoice();
const computerSelection = getComputerChoice();

// initialize the human and computer variables
const humanChoice = '';
const computerChoice = '';
let playCounter = 1;

// the function that take two variable (the human and computer choice)
// and then work on them to display the right output 
function playRound(humanChoice, computerChoice) {
 
  humanChoice = getHumanChoice().toLocaleLowerCase();
  computerChoice = getComputerChoice().toLocaleLowerCase();
  // the different possibily if human choose 'rock'
  if (humanChoice === 'rock' && computerChoice === 'rock') {
   playChoice(humanChoice, computerChoice);
    winner.innerHTML = "There is a draw in this round both of you have chosen <b>Rock</b>.";
    
  } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
    playChoice(humanChoice, computerChoice);
    winner.innerHTML = "You beat the computer in this round";
    humanScore += 1;
    human.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    playChoice(humanChoice, computerChoice);
    winner.innerHTML = "The computer beat you in this round";
    computerScore += 1;
    computer.textContent = `Computer: ${computerScore}`; 
  }
   // the different possibily if human choose 'paper'
  if (humanChoice === 'paper' && computerChoice === 'paper') {
    playChoice(humanChoice, computerChoice);
     winner.innerHTML = "There is a draw in this round both of you have chosen <b>Paper</b>.";
     
   } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
     playChoice(humanChoice, computerChoice);
     winner.innerHTML = "The computer beat you in this round";
     computerScore += 1;
     computer.textContent = `Computer: ${computerScore}`;
   } else if (humanChoice === 'paper' && computerChoice === 'rock') {
     playChoice(humanChoice, computerChoice);
     winner.innerHTML = "You beat the computer in this round";
     humanScore += 1;
     human.textContent = `Human: ${humanScore}`;
   }
   // the different possibily if human choose 'scissor'
   if (humanChoice === 'scissor' && computerChoice === 'scissor') {
    playChoice(humanChoice, computerChoice);
     winner.innerHTML = "There is a draw in this round both of you have chosen <b>Scissor</b>.";
     
   } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
     playChoice(humanChoice, computerChoice);
     winner.innerHTML = "You beat the computer in this round";
     humanScore += 1;
     human.textContent = `Human: ${humanScore}`;
   } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
     playChoice(humanChoice, computerChoice);
     winner.innerHTML = "The computer beat you in this round";
     computerScore += 1;
     computer.textContent = `Computer: ${computerScore}`;
   }


  playCounter++;
  roshamboField.value = "";
  roshamboField.focus();
  
 }

 // declare a restart button
let restartBtn;

// the play logic function 
function playGame() {
  // calling the playRound function
  playRound(humanSeclection, computerSelection);
  // the game will be played five times in the row
  if(playCounter == 3) {
  // checking who got the most score
  if(humanScore < computerScore) {
    //disable the the input fields
  roshamboField.disabled = true;
  roshamboBtn.disabled = true;
  // hide the content of the header and image
  humanChoiceHeaderImg.style.display = 'none';
  computerChoiceHeaderImg.style.display = 'none';
  // set the text content and the attribute
  computer.textContent = `Computer win with ${computerScore} points`;
  computer.setAttribute('class', 'success');
  // set the the human and winner text content to empty string
  human.textContent = '';
  winner.textContent = '';
  // create a button and append it inside the container div
  restartBtn = document.createElement('button');
  restartBtn.textContent = 'retstart again';
  restartBtn.setAttribute('class', 'restartBtn')
  container.appendChild(restartBtn);
  restartBtn.addEventListener('click', retstart)
  }
  // same as the first if
  else if(humanScore > computerScore) {
    roshamboField.disabled = true;
    roshamboBtn.disabled = true;
    humanChoiceHeaderImg.style.display = 'none';
    computerChoiceHeaderImg.style.display = 'none';
    human.textContent = `Human win with ${humanScore} points`;
    human.setAttribute('class', 'success')
    computer.textContent = '';
    winner.textContent = '';
    restartBtn = document.createElement('button');
    restartBtn.textContent = 'retstart again';
    restartBtn.setAttribute('class', 'restartBtn')
    container.appendChild(restartBtn);
    restartBtn.addEventListener('click', retstart)
  }
  //same
 else {
  roshamboField.disabled = true;
  roshamboBtn.disabled = true;
  humanChoiceHeaderImg.style.display = 'none';
  computerChoiceHeaderImg.style.display = 'none';
  winner.textContent = `There is no winner you both have the same points`;
  winner.setAttribute('class', 'success')
  computer.textContent = '';
  human.textContent = '';
  restartBtn = document.createElement('button');
  restartBtn.textContent = 'retstart again';
  restartBtn.setAttribute('class', 'restartBtn')
  container.appendChild(restartBtn);
  restartBtn.addEventListener('click', retstart)
}
}
}
 // call the event listener
 roshamboBtn.addEventListener('click', playGame);

// the restart function 
function retstart() {
  // set the playCounter to one, to restart the game
  playCounter = 1;

  // enable the input fields
  roshamboField.disabled = false;
  roshamboBtn.disabled = false

  // set the paragrphs to the initial state
  human.textContent = 'Human: 0';
  human.setAttribute('class', '')
  humanScore = 0;
  computer.textContent = 'Computer: 0';
  computer.setAttribute('class', '');
  computerScore = 0;
  winner.textContent = '';
  winner.setAttribute('class', '')
  restartBtn.parentNode.removeChild(restartBtn)

}


