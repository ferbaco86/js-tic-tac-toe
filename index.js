const txtPlayer1 = document.getElementById('firstname');
const txtPlayer2 = document.getElementById('secondname');
const btnAddPlayers = document.getElementById('btnplayers');
const btnEndGame = document.getElementById('end-game');
const btnStart = document.getElementById('start-game');
const boardSection = document.querySelector('.board');
const boardContainer = document.querySelector('.board-container');
const endGameBtnContainer = document.querySelector('.end-btn-container');


const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

let counterPlays = 0;

const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const setName = (playerName) => {
    name = playerName;
  };
  return { getName, getSymbol, setName };
};

const player1 = player('', 'X');
const player2 = player('', 'O');

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
    if (counterPlays > 8) {
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
      counterPlays += 1;
    } else if (gameBoard.board[id] === '') {
      target.innerHTML = p2Symbol;
      gameBoard.board[id] = p2Symbol;
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

const gameLogic = (p1, p2) => {
  setSymbol(p1.getSymbol(), p2.getSymbol());
  const gameWinner = checkWinner();
  if (gameWinner === 1) {
    alert(`${p1.getName()} IS THE WINNER!!`);
    endGame();
  }
  if (gameWinner === 2) {
    alert(`${p2.getName()} IS THE WINNER!!`);
    endGame();
  }
  if (gameWinner === 3) {
    alert('THE GAME IS TIED!!');
    endGame();
  }
};

const hideElement = element => { element.classList.toggle('is-hidden'); };

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
};

const showChangePlayersBtn = () => {
  hideElement(document.getElementById('change-game'));
};

const stopGame = () => {
  endGame();
  showBoard();
  showChangePlayersBtn();
};

const addPlayers = () => {
  player1.setName(txtPlayer1.value);
  player2.setName(txtPlayer2.value);
  document.getElementById('p1-title').innerHTML = player1.getName();
  document.getElementById('p2-title').innerHTML = player2.getName();
};

boardSection.addEventListener('click', gameLogic.bind(window.event, player1, player2));
btnAddPlayers.addEventListener('click', () => {
  addPlayers();
  hideElement(boardSection);
  hideElement(document.querySelector('.players'));
  hideElement(boardContainer);
  hideElement(endGameBtnContainer);
  btnAddPlayers.remove();
});

document.getElementById('p1-title').innerHTML = player1.getName();
document.getElementById('p2-title').innerHTML = player1.getName();


btnEndGame.addEventListener('click', stopGame);
document.getElementById('change-game').addEventListener('click', () => {
  hideElement(document.querySelector('.players'));
  hideElement(endGameBtnContainer);
  showChangePlayersBtn();
  hideElement(document.getElementById('btn-confirm-change'));
});
btnStart.addEventListener('click', startGame);
document.getElementById('btn-confirm-change').addEventListener('click', () => {
  addPlayers();
  hideElement(endGameBtnContainer);
  hideElement(document.querySelector('.players'));
  hideElement(document.getElementById('btn-confirm-change'));
  showChangePlayersBtn();
});
