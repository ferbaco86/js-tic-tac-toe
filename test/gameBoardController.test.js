import gameBoardController from '../src/js/gameBoardController';

test('Set symbols on the board', () => {
  document.body.innerHTML = `
  <section class="is-hidden board">
    <div id="0" class="square">
    </div>
    <div id="1" class="square">
    </div>
    <div id="2" class="square">
    </div>
    <div id="3" class="square">
    </div>
    <div id="4" class="square">
    </div>
    <div id="5" class="square">
    </div>
    <div id="6" class="square">
    </div>
    <div id="7" class="square">
    </div>
    <div id="8" class="square">
    </div>
</section>
`;
  const square = document.getElementById('0');
  const id = square.getAttribute('id');
  const p1Symbol = 'X';
  const p2Symbol = 'O';
  gameBoardController.setSymbol(p1Symbol, p2Symbol, square);
  expect(gameBoardController.gameBoard.board[id]).toBe(p1Symbol);
});

test('Check player 1 winner logic', () => {
  gameBoardController.gameBoard.board = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(gameBoardController.checkWinner()).toBe(1);
});

test('Check player 2 winner logic', () => {
  gameBoardController.gameBoard.board = ['O', 'O', 'O', '', '', '', '', '', ''];
  expect(gameBoardController.checkWinner()).toBe(2);
});

test('Reset board at endgame', () => {
  gameBoardController.gameBoard.board = ['O', 'O', 'X', 'X', 'O', '', 'O', '', ''];
  gameBoardController.endGame();
  expect(gameBoardController.gameBoard.board).toEqual(['', '', '', '', '', '', '', '', '']);
});