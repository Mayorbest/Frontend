 document.querySelector('.header1').innerHTML = "Pick your move and computer will automatically pick it's move <br> computer is your only opponent"

    let isAutoP = false;
    let timeO;
function autoP () {
    if (!isAutoP) {
        timeO = setInterval( () => {
     const Playon = pickCompMove();
        playM(Playon)} , 1500 );
    isAutoP = true;}
        else {
            clearInterval(timeO)
            isAutoP = false;
        }
        if (isAutoP === true) {  document.querySelector('.autoplay').innerHTML = 'Stop Playing'}

        else { document.querySelector('.autoplay').innerHTML = 'Auto Play'}
    }


    let score = JSON.parse(localStorage.getItem('score'));
    if (!score) {score = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };}

const compMove = pickCompMove();
 let result = '';

     function playM(playerM) {
        const compMove = pickCompMove();
    if (playerM === 'rock') {

        if (compMove === 'rock') {result = 'Tie';}
            else if (compMove === 'papper') {result = 'You lose';}
            else if (compMove === 'scissors') {result = 'You win';}
    }
    else if (playerM === 'papper') {
        if (compMove === 'rock') {result = 'You win';}
            else if (compMove === 'papper') {result = 'Tie';}
            else if (compMove === 'scissors') {result = 'You lose';}
    }
    else if (playerM === 'scissors') {
        if (compMove === 'rock') {result = 'You lose';}
            else if (compMove === 'papper') {result = 'You win';}
            else if (compMove === 'scissors') {result = 'Tie';}
    };

    if (result === 'You win') { score.Wins += 1}
    else if (result === 'You lose') { score.Losses += 1}
    else if (result === 'Tie') { score.Ties += 1}

localStorage.setItem('score', JSON.stringify(score));
    
document.querySelector('.display').innerHTML = `${result}.`
   
document.querySelector('.result').innerHTML = `Wins: ${score.Wins} Loses: ${score.Losses} Ties: ${score.Ties}`;

document.querySelector('.moves').innerHTML = ` You choose <img src="images/${playerM}.png" class="move"> and computer move is <img src="images/${compMove}.png" class="move">`;
        }

    function pickCompMove() {
        const ranN = Math.random()
         let compMove = '';
        if (ranN >= 0 && ranN< 1/3) { compMove = 'rock'}
        else if (ranN >= 1/3 && ranN< 2/3) {compMove = 'papper'}
        else if (ranN >= 2/3 && ranN < 1) { compMove = 'scissors'};
         return compMove;
    }

    document.querySelector('.reset').addEventListener('click', ()=> {
        score.Wins = 0,
        score.Losses = 0,
        score.Ties = 0;
        localStorage.removeItem('score');
        document.querySelector('.result').innerHTML = `Wins: 0 Loses: 0 Ties: 0`;
        document.querySelector('.display').innerHTML = 'Score was reset'
    })