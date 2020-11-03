const addPlayers = (() => {
  const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    const setName = (playerName) => {
      name = playerName;
    };
    return { getName, getSymbol, setName };
  };

  const player1 = player('', 'X');
  const player2 = player('', 'O');
  const txtPlayer1 = document.getElementById('firstname');
  const txtPlayer2 = document.getElementById('secondname');

  const setPlayerInfo = (txtPlayer1, txtPlayer2) => {
    player1.setName(txtPlayer1.value);
    player2.setName(txtPlayer2.value);
    document.getElementById('p1-title').innerHTML = player1.getName();
    document.getElementById('p2-title').innerHTML = player2.getName();
  };

  return {
    player1,
    player2,
    txtPlayer1,
    txtPlayer2,
    setPlayerInfo,
  };
})();

export default addPlayers;