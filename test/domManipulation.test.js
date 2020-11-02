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