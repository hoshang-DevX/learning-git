                            // Asynchronous programming

// you order for tomato soup 
// meanwhile we continue our conversation
// case 1 - ACCEPTED - server brings soup to you
// case 2 - REJECTED - No soup today

// const WaitingForSoup = () => console.log ( 'soup')

// console.log( 'i started talking to seerat')
// setTimeout( WaitingForSoup, 2000)       // 2000 ms ke baad display ho jayega 
// console.log( 'i am still talking to her')

// line 10 pehle chalni chahiye thi 
// fir line 11 chalni chahiye thi 
// fir line 12 chalni chahiye thi 
// but line 11 sbse late run hui 




                        // creating promise

// const promise1 = new Promise((resolve,reject) => {
//     isReady = [true,false][Math.floor(Math.random() * 2)]
//     setTimeout (() => {isReady ? resolve ('soup is ready') : reject( ' No soup today ')    // ternary statement
// },2000)
// })
// promise1
// .then (success => console.log({success}))     // if isReady == True
// .catch(error => console.log({error}))        // if isReady == false



// fetch('https://dog.ceo/api/breeds/image/random')        // this is a promise
// .then(response => response.json())                    // this is a promise
// .then( data => console.log(data) )          // when promises are resolved => log the data



    // but it is not wise to write so many .then() and .catch() statements
    
                            // => concept of ASYNC / AWAIT


    // async === means that it is an asycnh data & it will run out of order 
    // bole toh is func ko internet se interact krna ho sakta hai ie) it might be some website or database
    // therefore there will be a delay in its execution 
    // inn sabhi type of opperations mai 99.99% times async() function hi use hoga
    
// RUles for using async()
// 1- you must create a function  -  you can't use async outside a function 
// 2-  You must use the keyword async 
// 3-  You must use the word await


// const getDog = async() => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const response = await fetch(url)       // we'll await the fetch wala promise ie) 1st promise
//     const data = await response.json()      // then we'll await the 2nd Promise
//     console.log(data)
// }
// getDog()


// creating promise
// const promise1 = new Promise((resolve,reject) => {
//     isReady = [true,false][Math.floor(Math.random() * 2)]
//     setTimeout (() => {isReady ? resolve ('soup is ready') : reject( ' No soup today ')    // ternary statement
// },2000)
// })


// const getSoup = async() => {
//     const data = { rating : 0, tip : 0, pay : 0}
//     try{ 
//         const success = await promise1
//         console.log ( {success})
//         data.pay = 20
//         data.rating = 5
//         data.tip = .2
//         return data
//     }
//     catch(error){ 
//         console.log ({error})
//         data.pay = 0
//         data.rating = 1
//         data.tip = 0
//         return data
//     } 
// }

// getSoup().then( result => console.log(result))  // log the returned data object when the promise is resolved

// we did so because getSoup is an asyhchronous function and when it "> returns a value <" it is wrapped in a 
// promise... So, to access the returned value we either need to await the function 
// or use .then() to handle the promise
// following are the 2 ways :-
        //    1) const main = async() => {
        //         const result = await getSoup()
        //         console.log (result)    
        //         }

        //         main()

        //    2)  getSoup().then( result => console.log(result)) 

        





                // *** DIVING DEEPER INTO  PROMISES                 

// const cart = [ "shirts", "pants", "shoes"]


// // maanle yh sab functions are APIs which will take an uncertain time to get resolved 

// // this is a general way of writing using callback approach
// createOrder = (cart, callback) => {
//     proceedtoPay = (orderId,callback) => {
//         showOrderSummary = (paymentInfo,callback) => {
//             updateBalance()
//         }
//     }
// }
// createOrder(cart)

// // isko we will convert into .then approach

// createOrder(cart)
// .then((orderId) => proceedtoPay(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateBalance(paymentInfo))