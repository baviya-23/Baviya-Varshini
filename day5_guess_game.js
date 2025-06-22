\\Random number Game
function guessGame(userGuess){
    let randomNumber=Math.floor(Math.random()*10)+1
    console.log("Random number is:",randomNumber)
    if(userGuess===randomNumber){
        return "You Guessed right!"
    }else{
        return "Worng Guess.Try Again!"
    }
}
console.log(guessGame(3))
