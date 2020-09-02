const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};
let counterPlays = 0;
const domListener = (event) => {
  if (event.target.nodeName === "DIV") {
    const target = event.target;
    let attributeId = target.getAttribute('id');
    if (counterPlays % 2 === 0 ) {
      target.innerHTML = 'X';
      counterPlays += 1;
    }
    else {
      target.innerHTML = 'O';
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


