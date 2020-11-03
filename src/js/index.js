import '../styles/style.css';
import addPlayers from './addPlayers';
import gameBoardController from './gameBoardController';
import domManipulation from './domManipulation';


const gameLogic = (p1, p2, target) => {
  gameBoardController.setSymbol(p1.getSymbol(), p2.getSymbol(), target);
  const gameWinner = gameBoardController.checkWinner();
  if (gameWinner === 1) {
    domManipulation.setWins(domManipulation.p1Wins, domManipulation.p2Wins);
    domManipulation.showWinPopup(domManipulation.p1WinPopup);
    gameBoardController.endGame();
  }
  if (gameWinner === 2) {
    domManipulation.setWins(domManipulation.p1Wins, domManipulation.p2Wins);
    domManipulation.showWinPopup(domManipulation.p2WinPopup);
    gameBoardController.endGame();
  }
  if (gameWinner === 3) {
    domManipulation.showWinPopup(domManipulation.tiePopup);
    gameBoardController.endGame();
  }
};

const showIntro = () => {
  const ticTitle = document.getElementById('tic');
  const tacTitle = document.getElementById('tac');
  const toeTitle = document.getElementById('toe');

  const showTic = () => {
    ticTitle.classList.remove('is-hidden');
  };
  const showTac = () => {
    tacTitle.classList.remove('is-hidden');
  };
  const showToe = () => {
    toeTitle.classList.remove('is-hidden');
  };
  const showBtn = () => {
    domManipulation.btnStart.classList.remove('is-hidden');
  };

  setTimeout(showTic, 2000);
  setTimeout(showTac, 2700);
  setTimeout(showToe, 3200);
  setTimeout(showBtn, 3700);
};

const inputValidation = (input1, input2) => {
  const alertMessage = document.getElementById('alertMessage');
  if (input1.value === '' || input2.value === '') {
    alertMessage.classList.remove('is-hidden');
    return false;
  }

  alertMessage.classList.add('is-hidden');
  return true;
};

showIntro();

domManipulation.boardSection.addEventListener('click', (e) => {
  gameLogic(addPlayers.player1, addPlayers.player2, e.target);
});
domManipulation.btnAddPlayers.addEventListener('click', () => {
  if (inputValidation(addPlayers.txtPlayer1, addPlayers.txtPlayer2) === true) {
    domManipulation.togglePlayerInfo(addPlayers.txtPlayer1, addPlayers.txtPlayer2,
      domManipulation.boardSection, domManipulation.playersInputContainer,
      domManipulation.boardContainer, domManipulation.endGameBtnContainer,
      domManipulation.btnAddPlayers);
  }
});

domManipulation.btnEndGame.addEventListener('click', (e) => {
  domManipulation.stopGame(domManipulation.p1Wins, domManipulation.p2Wins, e.target,
    domManipulation.btnChangePlayers, domManipulation.boardSection);
});
domManipulation.btnChangePlayers.addEventListener('click', () => {
  domManipulation.toggleStartStop(domManipulation.playersInputContainer,
    domManipulation.endGameBtnContainer,
    domManipulation.btnChangePlayers, domManipulation.btnConfirmChange);
});

domManipulation.btnStart.addEventListener('click', domManipulation.startGame);
domManipulation.btnConfirmChange.addEventListener('click', () => {
  if (inputValidation(addPlayers.txtPlayer1, addPlayers.txtPlayer2) === true) {
    addPlayers.setPlayerInfo(addPlayers.txtPlayer1, addPlayers.txtPlayer2);
    domManipulation.toggleStartStop(domManipulation.playersInputContainer,
      domManipulation.endGameBtnContainer,
      domManipulation.btnChangePlayers, domManipulation.btnConfirmChange);
  }
});