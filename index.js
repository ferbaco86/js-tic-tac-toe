const txtPlayer1 = document.getElementById('firstname');
const txtPlayer2 = document.getElementById('secondname');
const btnAddPlayer2 = document.getElementById('btnplayer2');
const btnAddPlayer1 = document.getElementById('btnplayer1');
const btnEndGame = document.getElementById('end-game');


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

const gameLogic = (p1, p2) => {
  setSymbol(p1.getSymbol(), p2.getSymbol());
  const gameWinner = checkWinner();
  if (gameWinner === 1) {
    alert(`${p1.getName()} IS THE WINNER!!`);
  }
  if (gameWinner === 2) {
    alert(`${p2.getName()} IS THE WINNER!!`);
  }
  if (gameWinner === 3) {
    alert('THE GAME IS TIED!!');
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
};

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', gameLogic.bind(window.event, player1, player2));
btnAddPlayer1.addEventListener('click', () => {
  player1.setName(txtPlayer1.value);
  alert(`Registered player is ${player1.getName()}`);
});
btnAddPlayer2.addEventListener('click', () => {
  player2.setName(txtPlayer2.value);
  alert(`Registered player is ${player2.getName()}`);
});
btnEndGame.addEventListener('click', endGame);
