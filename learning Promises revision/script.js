// const greet = () =>{
//     console.log('hi')
// }

// setTimeout(greet , 2000)


// const myTimeout = setTimeout(myGreeting, 3000);

// function myGreeting() {
//   document.getElementById("demo").innerHTML = "Happy Birthday to You !!"
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }


            // writing a promise
    const promise1 = new Promise ( (resolve,reject)  => {
        setTimeout( () => {
            const isReady = false
            isReady ? resolve('soup is ready'):reject('no soup today')
        } , 2000)
    })

    // promise1
    //     .then(success => console.log({success}))
    //     .catch(error => console.log({error}))



        const getSoup = async() => {
            const data = { 'rating' : 0,'tip' : 0,'pay' : 0}
           
            try{
                const soup = await promise1
                console.log(soup)
                data.rating = 5
                data.tip = .2
                data.pay = 10
                // console.log(data)
                return data
            }
            catch(error){
                console.log(error)
                data.rating = 5
                data.tip = .2
                data.pay = 10
                // console.log(data)
                return data
                
            }
        }
        getSoup(
            
        ).then(value => console.log(value))

                // using     ASYNC / AWAIT
    // async function banate hain whenever :
                    // we have to fetch data from the website
                    // we have to interact with some API
                    // we have to push something

 

// generallly we fetch like this 

// const generateImage = () => {
    
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.message)
//             dogImage.innerHTML = `<img src = '${json.message}' height = 400 width = 400/>`
        
//     })
// }

// after ASYNC / AWAIT ki den

    const getDog = async () => {
        const url = 'https://dog.ceo/api/breeds/image/random'

        // ab hum fetch krenge 
        // it means it gonna take sometime 
        // so use   "await"
        const response = await fetch(url)   
        
        // after fetch -> next thing is to get 'response.json()'
        // so again we have to use await

        const data = await response.json()
        // ab data ko kahin bhi use kar sakte hain 
        console.log(data)
    }               
    getDog()
