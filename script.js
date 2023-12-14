let restartButton = document.getElementById("button-play-again");
let gameBoxes = Array.from(document.getElementsByClassName("game-square"));
let topText = document.getElementById("title");
const playerTurn = document.getElementById("turn");
const play1score = document.getElementById("scoreboard-x");

let scoreboard1= 0; 

const O_Player = "O";
const X_Player = "X";
let currentPlayer = X_Player;


let boxSpaces = Array(9).fill(null);

let count_plays = 0;


const gameStart = () => 
{
    gameBoxes.forEach(box => box.addEventListener("click", boxClick));
}

function boxClick(e)
{
    const id = e.target.id;

    if(!boxSpaces[id] && count_plays < 9)
    {
        boxSpaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        playerTurn.innerText = currentPlayer;

        if(playerWon() !==false)
        {
            topText.innerText = currentPlayer + " Player Has Won!";

            return;
            
        }
        count_plays++;
        currentPlayer = currentPlayer == X_Player ? O_Player : X_Player;
    }

    if(count_plays === 9)
    {
        topText.innerHTML = "Draw Game!";
    }

    


}


const gameWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function playerWon()
{
    for (const condition of gameWin) {
        let [a,b,c] = condition;

        if(boxSpaces[a] && (boxSpaces[a] == boxSpaces[b] && boxSpaces[a] == boxSpaces[c])) 
        {
            return [a,b,c];
        }
    }
    return false;
}


restartButton.addEventListener("click", restart);

function restart()
{
    boxSpaces.fill(null);
    count_plays = 0;
    gameBoxes.forEach( box =>
        {
            box.innerText ="";
            box.style.backgroundColor="";
        });

        currentPlayer = X_Player;

        topText.innerHTML = "Tic-Tac-Toe";
}

gameStart();

