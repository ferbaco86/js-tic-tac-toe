import gameBoardController from './gameBoardController';
import addPlayers from './addPlayers';

const domManipulation = (() => {
  const btnAddPlayers = document.getElementById('btnplayers');
  const btnStart = document.getElementById('start-game');
  const boardSection = document.querySelector('.board');
  const boardContainer = document.querySelector('.board-container');
  const endGameBtnContainer = document.querySelector('.end-btn-container');
  const btnEndGame = document.getElementById('end-game');
  const btnChangePlayers = document.getElementById('change-game');
  const playersInputContainer = document.querySelector('.players');
  const btnConfirmChange = document.getElementById('btn-confirm-change');
  const p1Wins = document.getElementById('p1-wins');
  const p2Wins = document.getElementById('p2-wins');
  const p1WinPopup = document.getElementById('p1-win-popup');
  const p2WinPopup = document.getElementById('p2-win-popup');
  const tiePopup = document.getElementById('tie-popup');


  const hideElement = element => { element.classList.toggle('is-hidden'); };

  const showWinPopup = (popup) => {
    popup.classList.remove('is-hidden');
    const hideWinPopUp = () => {
      popup.classList.add('is-hidden');
    };
    setTimeout(hideWinPopUp, 1500);
  };

  const setWins = (p1Wins, p2Wins) => {
    if (gameBoardController.checkWinner() === 1) {
      let text1Int = Number(p1Wins.textContent);
      text1Int += 1;
      p1Wins.textContent = text1Int;
    } else if (gameBoardController.checkWinner() === 2) {
      let text2Int = Number(p2Wins.textContent);
      text2Int += 1;
      p2Wins.textContent = text2Int;
    }
  };

  const resetWins = (p1Wins, p2Wins) => {
    p1Wins.textContent = 0;
    p2Wins.textContent = 0;
  };

  const showBoard = (btnEndGame, boardSection) => {
    if (btnEndGame.innerHTML === 'Start Game') {
      btnEndGame.innerHTML = 'Stop Game';
    } else {
      btnEndGame.innerHTML = 'Start Game';
    }
    hideElement(boardSection);
  };

  const startGame = () => {
    const playersInput = document.querySelector('.players');
    const introContainer = document.querySelector('.intro-container');
    introContainer.classList.add('is-hidden');
    playersInput.classList.remove('is-hidden');
  };

  const stopGame = (p1Wins, p2Wins, btnEndGame, btnChangePlayers, boardSection) => {
    resetWins(p1Wins, p2Wins);
    gameBoardController.endGame();
    showBoard(btnEndGame, boardSection);
    hideElement(btnChangePlayers);
    if (btnEndGame.innerHTML === 'Start Game') {
      btnEndGame.classList.add('is-success');
      btnEndGame.classList.remove('is-error');
    } else {
      btnEndGame.classList.add('is-error');
      btnEndGame.classList.remove('is-success');
    }
  };

  const toggleStartStop = (playersInputContainer, endGameBtnContainer,
    btnChangePlayers, btnConfirmChange) => {
    hideElement(playersInputContainer);
    hideElement(endGameBtnContainer);
    hideElement(btnChangePlayers);
    hideElement(btnConfirmChange);
  };

  const togglePlayerInfo = (txtPlayer1, txtPlayer2, boardSection,
    playersInputContainer, boardContainer, endGameBtnContainer, btnAddPlayers) => {
    addPlayers.setPlayerInfo(txtPlayer1, txtPlayer2);
    hideElement(boardSection);
    hideElement(playersInputContainer);
    hideElement(boardContainer);
    hideElement(endGameBtnContainer);
    btnAddPlayers.remove();
  };

  return {
    btnAddPlayers,
    btnStart,
    btnEndGame,
    boardSection,
    btnConfirmChange,
    btnChangePlayers,
    p1Wins,
    p2Wins,
    p1WinPopup,
    p2WinPopup,
    tiePopup,
    playersInputContainer,
    endGameBtnContainer,
    boardContainer,
    startGame,
    stopGame,
    toggleStartStop,
    togglePlayerInfo,
    setWins,
    showWinPopup,
  };
})();

export default domManipulation;