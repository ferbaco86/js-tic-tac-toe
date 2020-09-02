const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const domListener = () => {
  alert('Danger watch out');
}

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', domListener)


const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};


