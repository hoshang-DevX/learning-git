
//          clever progammmer way

// ek API fetch krenge

// dogImageDiv = document.getElementById('dogImage')
// generateImageBtn = document.getElementById('generateImage')

// const generateImage = () =>{

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.message)
//             dogImageDiv.innerHTML = `<img src = '${json.message}'/>`
//     })

// }    
// generateImageBtn.onclick = generateImage

// generateImage()
   
///////////////////////////////////////////////////////////////////////////////////////


            // IMPROVISED versiion 


// dogImageDiv = document.getElementById('dogImage')
// generateImageBtn = document.getElementById('generateImage')

// function generateImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => {
//             if(!response.ok){
//                 throw new Error ('HTTPS ERROR !!')
//             }
//             else return response.json()
//         })

//         .then(json => {     // is json pe kuch kaam krna hai 
//             console.log(json.message)
//             dogImageDiv.innerHTML = `<img src = '${json.message}'/>`
//         })
// }

// generateImageBtn.onclick = generateImage
// generateImage()








                // <!--  SUPER HERO API -->

// const accessToken = 'a93aae0af0f2cd23ba47e0cac90d992c'      // yh cheez fixed thi 
// const baseURL = `https://superheroapi.com/api.php`          // yh BaseURL bhi fixed tha



// const NameOfHero = document.getElementById('NameOfHero')
// const searchInput = document.getElementById('searchInput')
// const SearchButton = document.getElementById('SearchButton')

// const NewHeroButton = document.getElementById('NewHeroButton') // random
// const heroImage = document.getElementById('heroImage')
// const DescriptionDIv = document.getElementById('Description')




// // for random hero we need a random id 
// const randomId = () => {
//     const heros = 731
//     return Math.floor(Math.random() * heros) + 1;
// }


// const showHeroInfoHtml = (character) => {

//     const name = `<h2>${character.name}</h2>`
//     const image = `<img src ='${character.image.url}' />`
//     const stats = Object.keys(character.powerstats)
//     .map( stat => `<p> ${stat} : ${character.powerstats[stat]} <p/>`)
//     .join('')


//     heroImage.innerHTML = `${name}${image}${stats}`
// }

// const getRandomHero = (id) => {
//     fetch(`${baseURL}/${accessToken}/${id}`)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             const stats = showHeroInfoHtml(json)    // yh  func will diplay the image and onfp about character 
//         })
// }



// const getSearchedHero = (name) => {
//     // input lega by the user and and fetch krega from API and 
//     // then will call the shoeHeroInfoHtml()

//     fetch(`${baseURL}/${accessToken}/search/${name}`)
//         .then(response => response.json())
//         .then(json => {
//             const hero = json.results[0]
//             console.log(json)
//             showHeroInfoHtml(hero)
//         })

// }



// // ab ek aisa fucntin banaan hai which will take a json/character  and will 


// NewHeroButton.onclick = () =>  getRandomHero(randomId())
// SearchButton.onclick = () => getSearchedHero(searchInput.value)




// //  /  //  /   /   /// /   //  /   /   /   /   / //////  //  /   //  /   /// /   /   /   /   /   //  /   



