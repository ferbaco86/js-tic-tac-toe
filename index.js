const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
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
      // console.log(index);
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
  });
  return winner;
};

const player1 = player('John', 'X');
const player2 = player('Jude', 'O');

let counterPlays = 0;
const domListener = (p1Symbol, p2Symbol) => {
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
  domListener(p1.getSymbol(), p2.getSymbol());
  const gameWinner = checkWinner();
  if (gameWinner === 1) {
    alert(`${p1.getName()} IS THE WINNER!!`);
  }
  if (gameWinner === 2) {
    alert(`${p2.getName()} IS THE WINNER!!`);
  }
};

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', gameLogic.bind(window.event, player1, player2));