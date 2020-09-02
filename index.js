const gameBoard = {
  board: ['', '', '', '', '', '', '', '', ''],
};

const domListener = (event) => {
  
  if (event.target.nodeName === "DIV"){
    alert(event.target.getAttribute('id'));
  }
}

const boardSection = document.getElementById('board');
boardSection.addEventListener('click', domListener)


const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};


