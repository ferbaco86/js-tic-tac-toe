
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
        counterPlays += 1;
      } else if (gameBoard.board[id] === '') {
        target.innerHTML = p2Symbol;
        gameBoard.board[id] = p2Symbol;
        target.classList.add('is-neon');
        target.classList.remove('is-yellow');
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

export default gameBoardController;