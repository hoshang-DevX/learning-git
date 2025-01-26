// console.log('hello world')
// console.log(1+1)

// created a variable
// name = 'hoshang'
// console.log(name)

// food = 40
// console.log(food)

// operators
// food = 40
// tipPercentage = 0.2
// tipAmount = food * tipPercentage   // * is an operator
// console.log('tip Amount ')
// console.log ( tipAmount )

// User Input 
// fruit = prompt('what is your favourite fruit ? ')
// console.log(fruit)


// in reality we dont use prompt to take input from user
// we use forms in HTML



// foodAmount = Number(prompt('Enter food Amount '))
// console.log('food amount : %d',foodAmount)

// tipPercentage = prompt('Enter Tip Percentage')/100
// console.log('Tip %age : %f',tipPercentage)

// tipAmount = Number(foodAmount * tipPercentage)
// console.log('tip Amount = %d',tipAmount)

// console.log ('Total Amount  = %d',foodAmount + tipAmount )

// food Amount & tip Amount are strings
// so we need to convert them to numbers
// Number ('100') will convert string 100 to number 100





/* Maths Methods 
 Math.floor()  - returns the nearest integer <= the given number
 Math.ceil()   - returns the nearest integer >= the given number
 Math.random() - returns a random number between 0 and 1
 */





        //   Variables

// 1 - var      => not recommended
// 2 - const  => only use when we dont want to change it again 
// 3 - let     => the value can be changed 


//   Small Weather APP

// let weather = prompt('How is the weather ?')
// if(weather == 'rainy')
//   console.log('Grab your Umbrella')
// else 
//   console.log('Wear your sunglasses') 

      








                        // FUNCTIONS


// parameter pass krke name display hoga
// function SaymyName(name ){
//   console.log(name)
// }

//SaymyName('hoshang')           // called the function

// template literals ke baare mai seekha 
// jo name dialogue box mai daalenge will be displayed
// function Greeting(name){
//   greet = 'hi ' + name + ', Nice to meet you'
// //      Template Literals
//   greet = ` Hi ${name}. Nice to meet you `      
//         console.log(greet)
// }
// Greeting(prompt('Enter your Name'))

// function sum(a,b){
//   return a + b
 // }

// let num1 = sum (1,3)
// console.log(num1)
/*
function CalculateFoodTotal(food,tip){
//foodAmount = food
//   Number(prompt('Enter food Amount '))
  console.log('food amount : %d',food)

  tipPercentage = tip/100
  console.log('Tip %age : %f',tipPercentage)

  tipAmount = Number(food * tipPercentage)
  console.log('tip Amount = %d',tipAmount)

  total = sum (food , tipAmount)
  return total
}

total = CalculateFoodTotal(1000,10)
console.log(total)
*/

        // ES6 way of writing functions
        // Arrow functions =>
        // Arrow function with explicit return

// eg sum function using arrow fuctions
// Arrow function with explicit return

// const sumArrow = (a , b) => {
  // return a+b
// }

// Arrow function with implicit return
// IMPORTANT : for implicit remove Curly Braces
// bina return statement use kare 

// const sumArrow2 = (a,b) => a+b    // arrow func declaration 
// console.log( sumArrow2(2,3) )








                          // ARRAYS


// const groceries =[ ' banana-0', 'apple-1', 'orange-2', 'fffd-3']
// console.log(groceries)    // whole array will be printed

// grabbed 0th index
//console.log(groceries[0])     // only banana will be printed

        // Array methods - push, slice, indexOf, length

// 1 - push()
// adding new element to the end of the array 
// groceries.push('hoshang-4')
// console.log(groceries)

// 2- slice()
// start from 0 inclusive and upto 2
// console.log(groceries.slice(0,2))

// start from 0 inclusive and upto 3
// console.log(groceries.slice(0,3))

// start from 0 inclusive and upto 4
// console.log(groceries.slice(0,4))

// start from 2 inclusive and upto 5
// console.log(groceries.slice(2,5))

// aray methods--  
// indexOf() -> returnns the index of the element 
// console.log(groceries.indexOf('hoshang-4'))

// length -> returns the length of the array
// console.log(groceries.length) 







                        // OBJECTS 

            // it is a data structure that stores data in key value pairs
                
// const person = {
//         name : 'hoshang',    // key : 'value'
//         skill : 'Javascript'
// }

// console.log(person.name)  // dot notation
// console.log(person['skill'])        // bracket notation

// // assign objects
// person.phone = '6006641324'
// person.address = 'Jammu'
// console.log (person.phone)
// console.log( person['address'])
// console.log(person)


// /// creating another object
// const person2 = {
//         name : 'seerat',
//         skill : 'Python',
//         // phone : '3464738 289'
//         // address : 'Jammu'
// }

// console . log ( person2.name)
// person2.address = 'Jammu'
// console.log(person2)

//   INTRODUCTION 

// const introduction = (name,skill,assets,liabilities) => { // function created
//         const person = {        // object created
//                 name : name,
//                 skill : skill,
//                 assets : assets,
//                 liabilities : liabilities,
//                                         // networth is a METHOD
//                 networth : function(){ // object mai function bana skte hain
//                 return this.assets - this.liabilities
//                         // this refers to the object person ka scope
//                         // usme banaye keys ko access kar sakte hain
//                 }
//         }
        
//         const intro = `hi my name is ${person.name} and my skill is ${person.skill} and my networth is ${person.networth()}$`        // template literals
//         return intro
// }
//  console.log (introduction('hoshang','sex','100000000','0') )










                        // LOOPS
// const groceries =[ 'banana-0', 'apple-1', 'orange-2', 'grapes-3']
        // FOR LOOP
// for( let i = 0 ; i < groceries.length; i++){
//         console.log(groceries[i])
// }

        // WHILE LOOP
// let i = 0
// while(i < groceries.length){
//         console.log(groceries[i])
//         i++
// }

 //        // besst way of for loop
 // for (const grocery of groceries){
 //         console.log(grocery)
 // }

                // calculating sum of numbers of array
// const numbers = [1,2,3,4,5,6,7]
// let sum = 0
// for (const number of numbers){
//         sum += number
// }
// console.log(sum)



               // letter counter 
// const HowManyLetter = (phrase) => {
//         // const phrase = 'will you marry me ?'
//         let count = 0
//         for (let letter of phrase){
//            count ++     
//         }
        
//         // console.log(count)
//         return {count}           // curly braces se woh count ko as a key consider krega
//                                 // and will return its value 
// }
// const phrase = prompt('write your phrase')
// console.log(HowManyLetter(phrase))



                // calculating sum of numbers of array

// const sumNumbers = () => {           
//         const numbers = [1,2,3,4,5,6,7]
//         // let numbers = Number(prompt('write integer array'))
//         let result = 0
//         for (let number of numbers ){
//                 console.log(number)
//                 result += number
//         }
//         return {result}
// }
// console.log(sumNumbers())


                // Find MAX element

// const Max = (numbers) => {
//         // const numbers = [1,2,3,4,5,6,7]
//         let max = Number.MIN_SAFE_INTEGER        // jusst like C++ INT_MIN - Number.MIN_SAFE_INTGER
//         for ( let number of numbers){
//                 if (number > max) 
//                         max = number
//         }
//         return {max}
// }
// console.log(Max([1,2,3,2,12,2,3,4,5,6,54444444]))


                // calculate frequency of element
// algo 
        // create an object "frequency "{ }
        // check if that element is already present in the "frequency"
        // if exists then increment its count
        // otherwise set its value in the "frequency" as 1

   // const freq = (phrase) => {
//         console.log(phrase)
//         let frequency = {}        // created an object - it stores values as KEY - VALUE pairs
//         for(letter of phrase){
//                 if(letter in frequency)
//                         frequency[letter]++
//                 else
//                         frequency[letter] = 1
//         }
//         return frequency
// }
// console.log(freq('hoshang'))


                 // calculate word frequency
// algo 
//         move in the phrase array
//         create an object "frequency"
//         if the word is seen in the frequency then increase its count 
//         else set its count in the "frequency " to 1

// const WordFreq = (phrase) => {

//         let words = phrase.split(' ')     // jaise hi space milegi split krdega
//         console.log(words)
//         let freq = {}        // object is created
//         for ( let word of words){
//                 if( word in freq)
//                         freq[word]++
//                 else
//                         freq[word] = 1
//         }
//         return freq
// }

// console.log(WordFreq('hello seerat how are you Miss you soo much'))



                //   Higher order functions
                //   map     - loops and returns in array 
                //   filter - loops and return an array with matching conditions
                //.  reduce

//.         1- .map()
// const array = [1,2,3,4,5,6]
// array.map(number => console.log(number))        // implicit return kar rhe hain hum
        
// const array = [1,2,3,4,5,6]
// let result = array.map(number => number * 2)       // .map() bole toh loop chalao // given array ko map karo
// console.log(result)

                // double display krne wala function banaya using map
// const doubleMap = (numbers) => {
//         return numbers.map(number => number * 2)
// }
// console.log(doubleMap([1,2,3,1,2,2,2,3]))
// working 
        // numbers wali array ko map krega in a new array mai and wiill return it



                         // filter()  - khud ka filter banana
                         // filter([1,2,3,4,5,6],3) and should return [4,5,6]
        

// const filter = (numbers,greaterThan) => {
//         let result = []
// // let result = numbers.map(number => (number > greaterThan) )    // it will return Boolean value
//        for(const number of numbers){
//                if(number > greaterThan)
//                        result.push(number) 
//       } 
//         return result
// }
// console.log(filter( [1,2,3,4,5,6] , 3 ) )



//                 another example of filtering
// we will make an array with objects 
// those objects will have different elements 
// we will make a filter and only the objects which satisfy the condition will be displayed

// const actors = [
//     {name : 'Hoshang', networth : 1999999292992},
//     {name : 'salman', networth : 9099},
//     {name : 'amir', networth : 344433334},
// ]

// let result = actors.filter(actor => actor.networth > 10000 )
// console.log(result)
// let names = result.map(actor => actor.name).join(' , ')  // actors ke names milenge aur will be joines with , 

// const playground = document.getElementById('playground')
// // playground.innerHTML = `<h1>${(JSON.stringify(names))}</h1>`    // index.html file ko run with liveserver karunga yh ayega 
// playground.innerHTML = `<h1>${names}</h1>`



                        //      .reduce()
                        // reduce func is used when we are given an array and we have to iterate 
                        // over it to calculate an accumulated value like the sum of all elements

// sum of all networths
// SUM : think of reduce
// resuce takes in a function as an argument 
// reduce loops and gives you back the Accumulator

// way 1 without ES6 -- func banana pdega
// const nums = [1,2,3,4]
// // const ans = nums.reduce(function(prev,curr) {       // reduce took function as an argument
// //         return prev + curr                          // prev is the accumulator
// // })

// // another way using ES6 notation
// const ans = nums.reduce((prev,curr) => prev + curr) // har curr pe jaake prev accumulate krega using '+'      
// console.log(ans)

// // now i want to display it on the browser
// const playground = document.getElementById('playground')
// playground.innerHTML =`<h1>${ans}</h1>`




// summing up all the networths using .reduce()

// const actors = [
//         {name : 'Hoshang', networth : 1999999292992},
//         {name : 'salman', networth : 9099},
//         {name : 'amir', networth : 344433334},
//     ]

// let sumofnetworthsusingReduce = actors.reduce((prev,curr) => prev + curr.networth, 0 )  // 0 is ki initially 0 value hogi
// console.log(sumofnetworthsusingReduce)

// // now i want to display it on the browser
// const playground = document.getElementById('playground')
// playground.innerHTML =`<h1>${sumofnetworthsusingReduce}</h1>`



 


                // preparation for Rock Paper Scissors
                // How to select a random element from an array \

        // const RandomSelectionFromArray = (fruits) => {
        //         const randomNumber = Math.floor(Math.random() * fruits.length)       
        //         return fruits[randomNumber]
        // }        
        
        // // Math.random()  gives output in range 0-1
        // // array mai se random element uthake dene ke liye array ki length se multiply krenge
        // // par value floating point hi hogi ...         so .floor() lagake integer mai convert kara 

        // // console.log(RandomSelectionFromArray)
        // const fruits = [ '🍎','🍌','🍑','🍉']
        // console.log(RandomSelectionFromArray(fruits))


                // if elseif else statements
                // rainy (0) , sunny (-1) , overcast (0)
                
                // const weatherScore = (weather1,weather2) => {
                //         if (weather1 == 'rainy' && weather2 == 'overcast' )         score = 'bada sexy mausam'
                //         else if ( weather1 == 'sunny')   score = -1
                //         else    score = 0

                //         return score
                // }
                // let weather1 = prompt('enter weather1 ')
                // let weather2 = prompt('enter weather2 ')
                // console.log(weatherScore( weather1, weather2))
                