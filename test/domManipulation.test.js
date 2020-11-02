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