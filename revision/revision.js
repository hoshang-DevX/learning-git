// console.log(1+1)
// console.log("hoshang");

// function myFunction(p1,p2){
//     return p1*p2;
// }

// console.log(myFunction(3,2));

// function toCelcius(farenheit ){
//     return ((5/9) * (farenheit-32));
// }
// let value = toCelcius(77);
// console.log(value);

// js functions takk kara on w3 schools 


// let food = 20;
// tipPercent= 0.2;
// tipAmount = food * tipPercent ; 
// console.log(tipAmount);

// user input 
// fruit = prompt('what is fav fruit?');
// console.log(fruit)

// function sayMyName(name){
//     console.log(name);
// }

// sayMyName('hoshang');

// function greeting ( name){
//     console.log('hi! My name is '+ name + ' nice to meet you');
//     console.log(`hi !!!! my name is ${name}. Nice to see you.`) // template literals
// }
// greeting('hoshang');


// let sum = (a,b) => {
//     return (a+b);
// }
// console.log(sum(1,2)) ;

// let groceries = ['apple', 'banana','kaju'];
// console.log(groceries);

// groceries.push('billo');
// console.log(groceries);

// console.log(groceries.slice(0,3)) ;


        // objects 

// const person1 = {
//     name : 'hoahng',
//     gender : ' male'
// }
// console . log( person1.name);        // dot notation
// console.log(person1['name']);        // bracket notation

// console.log(person1.gender);
// console.log(person1['gender']);

// const introducer = (name,shirt) =>{        // ek function banaya
//     const person ={             // ek object banaya which defines the person
//         name: name,
//         shirt:shirt,
//         assets : 1000000,
//         liability : 500,
//         networth : function(){
//             return this.assets - this.liability
//         }
//     }

//     const intro = `hi! my name is ${name}, my networth is ${networth}`
//     // console.log("intro");
//     return intro;

// }

// const fruits =[ 'banana-0', 'apple-1', 'orange-2', 'grapes-3']
// // FOR LOOP
// for ( let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(const fruit of fruits ){    // better way of writingg for loops 
//     console.log(fruit)
// }

            // find the max element of an array

//     const maxELement=(numbers) =>{
//         let maxNumber = Number.MIN_SAFE_INTEGER;
//         for (let number of numbers){
//             if(number > maxNumber)
//                 maxNumber = number;
//         }
//         return maxNumber;
//     }    

//    let max =  maxELement([1,4,14,2,12,15,111]);
//    console.log( max);


                    // letter counter 


    // const countLetter = (phrase) =>{
    //     // let phrase = 'my name is Hoshang';
    //     let count = 0;
    //     for ( let letter of phrase){
    //         count++;
    //     }
    //     return count;
    // }
    // let ans = countLetter('My name is Hoshang');
    // console.log(ans);


            // calculate the word frequency 
            // const wordFreq = (phrase) => {
            //     let words = phrase.split(" ");  // phrase.split() will crate an array of words in phrase
            //     console.log(words)

            //     let freq= {};
            //     for(let word of words){
            //         if(word in freq){
            //             freq[word]++;
            //         }
            //         else    freq[word] = 1;
            //     }
            //     return freq;
            // }
            // console.log(wordFreq('My name is Hoshang'));

            // const array = [1,2,3,4,5,6];
            // array.map(number => console.log(number * 2 ));


            // filter : it is method
            // khud ka filter banana
//             const filter = ( numbers, greaterThan) =>{
//                 let result = [];    // empty array banayi
//                 for ( const number of numbers){
//                     if( number > greaterThan)
//                         result.push(number)
//                 }
//                 return result;
//             }
//             console.log(filter([1,3,4,6,5],3));

// // using .filter() method
            const nums = [2,3,4,5,6,7,8];
//             let result = nums.filter(num => num > 3)     /// it will return an array
//             console.log(result);

//             const revision = document.getElementById('revision')
//             revision.innerHTML = `<h1>${result}</h1>`

        // .reduce()
        // it is used when we have to iterate an array and calculate an accumulated value

        // const ans = nums.reduce( (prev,curr) => prev + curr);
        // console.log(ans);


// summing up all the networths using .reduce()

const actors = [
        {name : 'Hoshang', networth : 1999999292992},
        {name : 'salman', networth : 9099},
        {name : 'amir', networth : 344433334},
    ]

    let sumNetWorths = actors.reduce((prev,curr) => prev + curr.networth,0)
    console.log(sumNetWorths);