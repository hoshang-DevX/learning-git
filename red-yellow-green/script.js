const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')

// instead of ek ek kreke har button ke liye call krna 
// we will access a whole class with all the buttons

const squares = document.querySelectorAll('.ColorSquare') // ColorSquare class ko dekha 
// aur uss class ke sab elements ko ek list mai daal diya
// ab ColorSquare mai id = red, yellow , green ke 3 nodes bann gaye
let TimesClicked = { 'RED' : 0, 'YELLOW' : 0, 'GREEN' : 0} // object to store initial values

squares.forEach( square => {     
    square.onclick = () => {
        TimesClicked[square.value] += 1
        square.innerText = TimesClicked[square.value]
    }
})

// to end the game
function clearScores(){
    TimesClicked.RED = 0
    TimesClicked.YELLOW = 0
    TimesClicked.GREEN = 0
    squares.forEach( square => {
        square.innerText = 0
    })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
