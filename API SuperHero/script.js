//   a93aae0af0f2cd23ba47e0cac90d992c
// "https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg"
const accessToken = 'a93aae0af0f2cd23ba47e0cac90d992c'      // yh cheez fixed thi 
const baseURL = `https://superheroapi.com/api.php`          // yh BaseURL bhi fixed tha

const newHeroImage = document.getElementById('heroImage')
const newHeroBtn = document.getElementById('NewHeroButton')
const searchByNameBtn = document.getElementById('SearchButton')
const SearchInput = document.getElementById('searchInput')
const NameOfHero = document.getElementById('NameOfHero')

const statToEmoji = {
    intelligence : '🧠',
    strength : '💪',
    speed : '⚡️',
    durability : '🏋️‍♀️',
    power : '📊',
    combat : '⚔️',
}

// function to display the stats of the hero 
// yh func will givee a string of <p> tags
const showHeroInfoHTML = (character) => {
    const name = `<h2>${character.name}</h2>`
    const image = `<img src = "${character.image.url}"height = 300 width = 200>`

    const stats = Object.keys(character.powerstats).map( stat => {
      return           `<p>${statToEmoji[stat]} ${stat} : ${character.powerstats[stat]}</p>`
    }).join('')

    newHeroImage.innerHTML = `${name}${image}${stats}`
    
}

let randomId = () => {
    const numberofHeroes = 731
    return Math.floor( Math.random() * numberofHeroes) + 1
}



const GetSuperHero = (id) => {
    fetch( `${baseURL}/${accessToken}/${id}`)           // for cleaniness aisa likha
    .then( response => response.json())
    .then ( json => {
        console.log(json)
        const stats = showHeroInfoHTML(json)            
        
})
}

// abb aage hume ek search field chahiye jahan name likhen aur hero aa jaye..

// ab hum ek aisa finction banayenge jo har character ke powerstats ko display krega


const GetSearchedSuperHero = (name) => {
    
    // console.log(SearchInput.value)
    fetch( `${baseURL}/${accessToken}/search/${name}`)
    .then(response => response.json())
    .then( json => {
        const hero = json.results[0]
        console.log(json)
        showHeroInfoHTML(hero)
       
    })
}
newHeroBtn.onclick = () => GetSuperHero(randomId())           //  button listener banaya
searchByNameBtn.onclick = () => GetSearchedSuperHero(SearchInput.value)     // button listener banaya

