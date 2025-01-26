// console.log ( 'hello')
// https://dog.ceo/api/breeds/image/random

// // we will not have to wait for it
// console.log('Runs 1st')

// // API fetching 
// // Asynchronous programming
// // we will have to wait for it
// const dogImage = document.getElementById('Dog Image')
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json.message)
//         dogImage.innerHTML = `<img src = '${json.message}' height = 400 width = 400/>`
        
//     })

// // again No wait    
// console.log('Runs 3rd')    

const dogImage = document.getElementById('DogImage')
const dogButton = document.getElementById('DogButton')

const generateImage = () => {
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            console.log(json.message)
            dogImage.innerHTML = `<img src = '${json.message}' height = 400 width = 400/>`
        
    })
}
// assign the click event to the button directly
    dogButton.onclick = generateImage
    
// pehli baar toh chlega hi 
generateImage()