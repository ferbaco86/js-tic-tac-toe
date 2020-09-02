const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};
let counterPlays = 0;
const domListener = (event) => {
  if (event.target.nodeName === "DIV") {
    const target = event.target;
    let id = target.getAttribute('id');
    if (counterPlays % 2 === 0 && gameBoard.board[id] === '') {
      target.innerHTML = 'X';
      gameBoard.board[id] = "X";
      counterPlays += 1;
    }
    else if (gameBoard.board[id] === '') {
      target.innerHTML = 'O';
      gameBoard.board[id] = 'O';
      counterPlays += 1;
    }
  }
}

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', domListener)


const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};


