import domManipulation from '../src/js/domManipulation';
import gameBoardController from '../src/js/gameBoardController';

test('Show start game elements', () => {
  document.body.innerHTML = ` <input class="players is-hidden" id="firstname"></input>  
  <input class="players is-hidden" id="secondname"></input>
  <div class = "intro-container"></div>
`;
  domManipulation.startGame();
  expect(document.querySelector('.intro-container').classList).toContain('is-hidden');
  expect(document.querySelector('.players').classList).not.toContain('is-hidden');
});

test('Stop game and reset score elements', () => {
  document.body.innerHTML = `
  <p id="p1-wins">2</p>
  <p id="p2-wins">1</p>
  <button id="end-game" class="nes-btn is-error">Stop Game</button>
  <button id="change-game">Change Players</button>  
  <section class="is-hidden board"></section>
`;
  const p1Wins = document.getElementById('p1-wins');
  const p2Wins = document.getElementById('p2-wins');
  const btnEndGame = document.getElementById('end-game');
  const btnChangePlayers = document.getElementById('change-game');
  const boardSection = document.querySelector('.board');

  p1Wins.textContent = '2';
  p2Wins.textContent = '1';

  domManipulation.stopGame(p1Wins, p2Wins, btnEndGame, btnChangePlayers, boardSection);
  expect(p1Wins.textContent).toBe('0');
  expect(p2Wins.textContent).not.toBe('1');
});

test('Show starting game elements', () => {
  document.body.innerHTML = `
    <div class="players nes-container is-dark is-hidden">
    </div>
    <div class="end-btn-container is-hidden">
        <button id="end-game" class="nes-btn is-error">Stop Game</button>
        <button id="change-game" class="is-hidden nes-btn">Change Players</button>
    </div>
    <button id="btn-confirm-change" class="is-hidden nes-btn is-primary"> Confirm Change</button>
  `;
  const playersInputContainer = document.querySelector('.players');
  const endGameBtnContainer = document.querySelector('.end-btn-container');
  const btnChangePlayers = document.getElementById('change-game');
  const btnConfirmChange = document.getElementById('btn-confirm-change');
  domManipulation.toggleStartStop(playersInputContainer, endGameBtnContainer,
    btnChangePlayers, btnConfirmChange);
  expect(playersInputContainer.classList).not.toContain('is-hidden');
  expect(endGameBtnContainer.classList).not.toContain('is-hidden');
  expect(btnChangePlayers.classList).not.toContain('is-hidden');
});

test('Show player info elements', () => {
  document.body.innerHTML = `
    <div class="board-container"></div>
    <section class="is-hidden board"></section>
    <div class="end-btn-container">
      <button id="end-game" class="nes-btn is-error">Stop Game</button>
    </div>
    <div class="players nes-container is-dark is-hidden">
    </div>
    <input type="text" id="firstname">
    <input type="text" id="secondname">
    <h1 id="p1-title"></h1>
    <h1 id="p2-title"></h1>
    <button id="btnplayers" class="nes-btn is-primary"> Add Players</button>
  `;
  const txtPlayer1 = document.getElementById('firstname');
  const txtPlayer2 = document.getElementById('secondname');
  const boardSection = document.querySelector('.board');
  const playersInputContainer = document.querySelector('.players');
  const boardContainer = document.querySelector('.board-container');
  const endGameBtnContainer = document.querySelector('.end-btn-container');
  const btnAddPlayers = document.getElementById('btnplayers');
  domManipulation.togglePlayerInfo(txtPlayer1, txtPlayer2, boardSection,
    playersInputContainer, boardContainer, endGameBtnContainer, btnAddPlayers);
  expect(boardContainer.classList).toContain('is-hidden');
  expect(playersInputContainer.classList).not.toContain('is-hidden');
  expect(playersInputContainer.classList).not.toContain('is-hidden');
  expect(endGameBtnContainer.classList).toContain('is-hidden');
});
