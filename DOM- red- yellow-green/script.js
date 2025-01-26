// console.log('hello')
// const titleDiv = document.getElementById('titleDiv')

// console.log(titleDiv.innerText)    // from html we are pulling titleDiv ka inner text

// titleDiv.innerText = 'Good Bye' ;  // from script file to html 


// console.log('hello')

// for DOM manipulation see the liveserver console not VS code's terminal
// let title = document.getElementById('title') // yh html file mai se title mai jo bhi hoga usko le aayega

// console.log('before changing the inner text : ',title.innerText)

// //let message = 'hello my lover'

// //title.innerText = ` ${message}`    // title ke <p> ko change kar diya

// console.log('after changing the inner text : ',title.innerText)
//     // ab jab console mai inner text ko dekha toh changed tha

// console.log('before changing the color : ',title.style.color)
// title.style.backgroundColor = 'green' 
// console.log('after changing : ',title.style.color)


let red = document.getElementById('red')
    // maanle red is Rock
    // now get compuer's choice => paper
    // user choice Vs computer choice
    //  -1 , 0 , 1
    // display eeverything on DOM

let yellow = document.getElementById('yellow')
let green = document.getElementById('green')

// red.onclick = () => console.log('Red')   // inn 3 lines ka neeche loop bana diya
// yellow.onclick = () => console.log('Yellow')
// green.onclick = () => console.log('Green')

const squares = document.querySelectorAll('.colorSquare')   // i wanna look for class name colorSquare
// colorSquare wali class ke sab elements "squares" mai chale jayenge

// console.log(squares)    // iss class mai jitne elements honge all will be displayed
                        // in a nodeList eg) square[0] is Red

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)                        

// now baar baar likhne sse acha hai ki loop mai daaldo
// using forEach 
const TimesClicked = { 'RED' : 0, 'YELLOW' : 0, 'GREEN' : 0}    // object banaya
squares.forEach(square => {
    square.onclick = () => {
        TimesClicked[square.value] += 1     // click hote hi object mai value bhada
        square.innerText = TimesClicked[square.value]   // display karde woh value in square
        //console.log(square.value)
    }
})
