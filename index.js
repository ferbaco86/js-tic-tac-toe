
const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const setName = (playerName) => {
    name = playerName;
  };
  return { getName, getSymbol, setName };
};

const audioController = (() => {
  const ticAudio = new Audio('./sounds/fx1.wav');
  const tacAudio = new Audio('./sounds/fx2.wav');
  const btnAudio = new Audio('./sounds/fx3.wav');
  const winAudio = new Audio('./sounds/win.wav');
  const tieAudio = new Audio('./sounds/tie.wav');
  const pressStartAudio = new Audio('./sounds/press_start.wav');
  const startAudio = new Audio('./sounds/start.wav');
  const stopAudio = new Audio('./sounds/stop.wav');
  const changeAudio = new Audio('./sounds/change.wav');


  function playSound(audio) {
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
  }
  return {
    ticAudio,
    tacAudio,
    btnAudio,
    winAudio,
    tieAudio,
    pressStartAudio,
    startAudio,
    stopAudio,
    changeAudio,
    playSound,
  };
})();

const gameBoardController = (() => {
  let counterPlays = 0;
  const gameBoard = {
    board: ['', '', '', '', '', '', '', '', ''],
  };

  const winConditions = {
    con_1: [0, 1, 2],
    con_2: [3, 4, 5],
    con_3: [6, 7, 8],
    con_4: [0, 3, 6],
    con_5: [1, 4, 7],
    con_6: [2, 5, 8],
    con_7: [0, 4, 8],
    con_8: [2, 4, 6],
  };
  const conds = Object.values(winConditions);

  const checkWinner = () => {
    let winner = 0;
    conds.forEach(element => {
      let countX = 0;
      let countO = 0;
      for (let index = 0; index < element.length; index += 1) {
        if (gameBoard.board[element[index]] === 'X') {
          countX += 1;
        } else if (gameBoard.board[element[index]] === 'O') {
          countO += 1;
        }
      }
      if (countX === 3) {
        winner = 1;
      } else if (countO === 3) {
        winner = 2;
      }
      if (counterPlays > 8 && winner === 0) {
        winner = 3;
      }
    });
    return winner;
  };

  const setSymbol = (p1Symbol, p2Symbol) => {
    if (window.event.target.nodeName === 'DIV') {
      const { target } = window.event;
      const id = target.getAttribute('id');
      if (counterPlays % 2 === 0 && gameBoard.board[id] === '') {
        target.innerHTML = p1Symbol;
        gameBoard.board[id] = p1Symbol;
        target.classList.add('is-yellow');
        target.classList.remove('is-neon');
        audioController.playSound(audioController.tacAudio);
        counterPlays += 1;
      } else if (gameBoard.board[id] === '') {
        target.innerHTML = p2Symbol;
        gameBoard.board[id] = p2Symbol;
        target.classList.add('is-neon');
        target.classList.remove('is-yellow');
        audioController.playSound(audioController.ticAudio);
        counterPlays += 1;
      }
    }
  };

  const endGame = () => {
    for (let index = 0; index < gameBoard.board.length; index += 1) {
      gameBoard.board[index] = '';
    }
    const gameUi = document.getElementsByClassName('square');
    for (let index = 0; index < gameUi.length; index += 1) {
      gameUi[index].innerHTML = '';
    }
    counterPlays = 0;
  };

  return {
    setSymbol,
    checkWinner,
    endGame,
  };
})();

const addPlayers = (() => {
  const player1 = player('', 'X');
  const player2 = player('', 'O');
  const txtPlayer1 = document.getElementById('firstname');
  const txtPlayer2 = document.getElementById('secondname');

  const setPlayerInfo = () => {
    player1.setName(txtPlayer1.value);
    player2.setName(txtPlayer2.value);
    document.getElementById('p1-title').innerHTML = player1.getName();
    document.getElementById('p2-title').innerHTML = player2.getName();
  };

  return {
    player1,
    player2,
    txtPlayer1,
    txtPlayer2,
    setPlayerInfo,
  };
})();

const domManipulation = (() => {
  const btnAddPlayers = document.getElementById('btnplayers');
  const btnEndGame = document.getElementById('end-game');
  const btnStart = document.getElementById('start-game');
  const boardSection = document.querySelector('.board');
  const boardContainer = document.querySelector('.board-container');
  const endGameBtnContainer = document.querySelector('.end-btn-container');
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

  const setWins = () => {
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

  const resetWins = () => {
    p1Wins.textContent = 0;
    p2Wins.textContent = 0;
  };

  const showBoard = () => {
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
    audioController.playSound(audioController.pressStartAudio);
  };

  const stopGame = () => {
    resetWins();
    gameBoardController.endGame();
    showBoard();
    hideElement(btnChangePlayers);
    if (btnEndGame.innerHTML === 'Start Game') {
      btnEndGame.classList.add('is-success');
      btnEndGame.classList.remove('is-error');
      audioController.playSound(audioController.stopAudio);
    } else {
      btnEndGame.classList.add('is-error');
      btnEndGame.classList.remove('is-success');
      audioController.playSound(audioController.startAudio);
    }
  };

  const toggleStartStop = () => {
    hideElement(playersInputContainer);
    hideElement(endGameBtnContainer);
    hideElement(btnChangePlayers);
    hideElement(btnConfirmChange);
    audioController.playSound(audioController.changeAudio);
  };

  const togglePlayerInfo = () => {
    addPlayers.setPlayerInfo();
    hideElement(boardSection);
    hideElement(playersInputContainer);
    hideElement(boardContainer);
    hideElement(endGameBtnContainer);
    audioController.playSound(audioController.startAudio);
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
    startGame,
    stopGame,
    toggleStartStop,
    togglePlayerInfo,
    setWins,
    showWinPopup,
  };
})();

const gameLogic = (p1, p2) => {
  gameBoardController.setSymbol(p1.getSymbol(), p2.getSymbol());
  const gameWinner = gameBoardController.checkWinner();
  if (gameWinner === 1) {
    domManipulation.setWins();
    domManipulation.showWinPopup(domManipulation.p1WinPopup);
    audioController.playSound(audioController.winAudio);
    gameBoardController.endGame();
  }
  if (gameWinner === 2) {
    domManipulation.setWins();
    domManipulation.showWinPopup(domManipulation.p2WinPopup);
    audioController.playSound(audioController.winAudio);
    gameBoardController.endGame();
  }
  if (gameWinner === 3) {
    domManipulation.showWinPopup(domManipulation.tiePopup);
    audioController.playSound(audioController.tieAudio);
    gameBoardController.endGame();
  }
};

const showIntro = () => {
  const ticTitle = document.getElementById('tic');
  const tacTitle = document.getElementById('tac');
  const toeTitle = document.getElementById('toe');

  const showTic = () => {
    ticTitle.classList.remove('is-hidden');
    audioController.playSound(audioController.tacAudio);
  };
  const showTac = () => {
    tacTitle.classList.remove('is-hidden');
    audioController.playSound(audioController.ticAudio);
  };
  const showToe = () => {
    toeTitle.classList.remove('is-hidden');
    audioController.playSound(audioController.tacAudio);
  };
  const showBtn = () => {
    domManipulation.btnStart.classList.remove('is-hidden');
    audioController.playSound(audioController.btnAudio);
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

domManipulation.boardSection.addEventListener('click', gameLogic.bind(window.event, addPlayers.player1, addPlayers.player2));
domManipulation.btnAddPlayers.addEventListener('click', () => {
  if (inputValidation(addPlayers.txtPlayer1, addPlayers.txtPlayer2) === true) {
    domManipulation.togglePlayerInfo();
  }
});

domManipulation.btnEndGame.addEventListener('click', domManipulation.stopGame);
domManipulation.btnChangePlayers.addEventListener('click', domManipulation.toggleStartStop);

domManipulation.btnStart.addEventListener('click', domManipulation.startGame);
domManipulation.btnConfirmChange.addEventListener('click', () => {
  if (inputValidation(addPlayers.txtPlayer1, addPlayers.txtPlayer2) === true) {
    addPlayers.setPlayerInfo();
    domManipulation.toggleStartStop();
  }
});