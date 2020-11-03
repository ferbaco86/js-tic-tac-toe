import addPlayers from '../src/js/addPlayers';

test('sets players name', () => {
  document.body.innerHTML = `
  <input id="firstname"></input>
  <input id="secondname"></input>
  <h1 id="p1-title"></h1>
  <h1 id="p2-title"></h1>
`;
  const txtPlayer1 = document.getElementById('firstname');
  const txtPlayer2 = document.getElementById('secondname');
  txtPlayer1.value = 'Fernando';
  txtPlayer2.value = 'Jude';


  addPlayers.setPlayerInfo(txtPlayer1, txtPlayer2);
  expect(document.getElementById('p1-title').innerHTML).toBe('Fernando');
  expect(document.getElementById('p2-title').innerHTML).not.toBe('Fernando');
});