const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};

const player1 = player('John', 'X');
const player2 = player('Jude', 'O');

let counterPlays = 0;
const domListener = (p1Symbol, p2Symbol) => {
  if (event.target.nodeName === 'DIV') {
    const { target } = event;
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

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', domListener.bind(event, player1.getSymbol(), player2.getSymbol()));
