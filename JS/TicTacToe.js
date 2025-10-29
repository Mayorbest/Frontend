const board = document.querySelector('.container');
const status = document.querySelector('.status');
let gameState = Array(9).fill(null);
let gameActive = true;

const winningCombo = [
  [0,1,2], [3,4,5], [6,7,8], [0,4,8], [1,4,7], [0,3,6], [2,5,8], [2,4,6]
];

let currentPlayer = 'X'

let scoreO = {
  wins: 0,
  losses: 0,
  draws: 0
}

let scoreX = {
  wins: 0,
  losses: 0,
  draws: 0
}

board.addEventListener('click', function gameOn(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (!gameActive || gameState[index])
    return;
  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkwin()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false; 
  } 
  else if (gameState.every(cell => cell)) {
    status.textContent = `It's a draw!`;
    gameActive = false;
  }
  else {
    currentPlayer = currentPlayer === 'X' ? 'O': 'X'
    status.textContent = `Player ${currentPlayer}'s turn`
  }

  const values = status.textContent;

  
   
if (values === `Player O wins!`) {
  scoreO.wins ++
  scoreX.losses ++
}
else if (values === `Player X wins!`) {
  scoreO.losses ++
  scoreX.wins ++
}
else if (values === `It's a draw!`) {
  scoreO.draws++
  scoreX.draws++
}

document.querySelector('.O-status').innerHTML = `<p>Player O scores<br></p>Wins: ${scoreO.wins}<br>
loses: ${scoreO.losses}<br>
Draws: ${scoreO.draws}<br>`

document.querySelector('.X-status').innerHTML = `<p>Player X scores<br></p>Wins: ${scoreX.wins}<br>
loses: ${scoreX.losses}<br>
Draws: ${scoreX.draws}<br>`

document.querySelector('.reset').addEventListener('click', () => {
    gameState = Array(9).fill(null)
    currentPlayer = 'X';
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`

    document.querySelectorAll('.gamebox').forEach(cell => {cell.textContent = '';})
});
});

function checkwin () {
  return winningCombo.some(combo => { return combo.every(index => gameState[index] === currentPlayer);
  });
};