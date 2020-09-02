const gameBoard = {
  board: ['X', 'X', 'O', 'O', 'X', 'X', 'O', 'X', 'O'],
};

const boardSection = document.getElementById('board');


const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};


