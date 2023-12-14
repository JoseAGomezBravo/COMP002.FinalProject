let restartButton = document.getElementById("button-play-again")
let gameBoxes = Array.from(document.getElementsByClassName("game-square"))
let topText = document.getElementById("turn-tracker")


const O_Player = "O"
const X_Player = "X"
let currentPlayer = X_Player


let boxSpaces = Array(9).fill(null)


const gameStart = () => 
{
    gameBoxes.forEach(box => box.addEventListener("click", boxClick))
}

function boxClick(e)
{
    const id = e.target.id

    if(!boxSpaces[id])
    {
        boxSpaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerWon())
        {
            topText = "${currentPlayer} has won!"
        }

        currentPlayer = currentPlayer == X_Player ? O_Player : X_Player
    }
}





function playerWon()
{

}


restartButton.addEventListener("click", restart)

function restart()
{
    boxSpaces.fill(null)

    gameBoxes.forEach( box =>
        {
            box.innerText =""
        })

        currentPlayer = X_Player

        topText = "Tic-Tac-Toe"
}

gameStart()

