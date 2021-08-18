const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

function buttonClicked(buttonName) {
  clearMessages();
  const playerMove = buttonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

let playerResult = 0;
let computerResult = 0;

function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerResult++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerResult++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerResult++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerResult++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    document.getElementById('player-result').innerHTML = playerResult;
    document.getElementById('computer-result').innerHTML = computerResult;
  }
