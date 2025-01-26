let titleDiv = document.getElementById('titleDiv')

console.log('before : ' + titleDiv.innerText);       // isse ho DOM mai bhi likha hoga woh console mai display ho jayega 

// now DOM mai likhe ko change krne ke liye
titleDiv.innerText = 'Hoshang'
console.log('after :' + titleDiv.innerText)

titleDiv.innerHTML= `<p>Hello</p>`

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

let squares = document.querySelectorAll('.colorSquare')

let timesClicked = { 'red':0, 'yellow' : 0, 'green': 0 }

squares.forEach(square => {
    square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    }
})


