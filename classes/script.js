         
//                                     // classes

//  class car {        // class banadi
//     constructor(name,color,TopSpeed){       // constructor() is a method-- likhna zaroori hota hai
//         this.name = name
//         this.color = color
//         this.TopSpeed = TopSpeed
//         this.currentSpeed = 0
//     }

//     drive(speed = 10){       // passed argument to the method
//          // created a method inside the class " car "
//         // console.log(`${this.name} just drove 2 miles`);
//         this.currentSpeed += speed
//         console.log(`${this.name} is driving at ${this.currentSpeed} mph`)
//     }

    
//     zeroTo60(){               //   asynchronous hai yh   toh iska promise return krva denge
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(`${this.name} ki Speed sexy hai bhaisaab`)
//                 this.currentSpeed = 60
//                 console.log(`${this.name} is accelerated to ${this.currentSpeed} mph`)
//                 resolve()
//             },2000 )

//         })
//     }
    


//     brake(){        // method -> brake()
//         console.log(`${this.name} is applying the brakes !`);
//         this.currentSpeed -= 10
//         console.log(this.currentSpeed)
//     }

//     stop(){
//         this.currentSpeed = 0
//         console.log('the car has been stopped')
//     }    
//  }


//  // now using the class we will make objects of this class..
//  const car_1 = new car('ferrari','red',450)
//  const car_2 = new car( 'porsche','white',300)

//  // car_1 . name = name ie ) ferrari 
//  // car_1 . color = color ie ) red

// console.log( car_1.name )
// console.log( car_1.color )
// console.log( car_1.TopSpeed )

// console.log( car_2.name )
// console.log( car_2.color )
// console.log( car_2.TopSpeed )

// const startCar = async () =>{           // async functiono mai await lagake promise ko call kar diya
//                                         // abb yh baakiyon se pehle chal jyega after a delay    
//     // car_1                                    
//     await car_1.zeroTo60();              

//     car_1.drive();
//     car_1.drive();
//     car_1.drive();
//     car_1.drive();

//     car_1.brake();

//     car_1.stop();

// // car_2

// await car_2.zeroTo60();              

// car_2.drive(20);
// car_2.drive(40);
// car_2.drive();
// car_2.drive();

// car_2.brake();

// car_2.stop();



// }

// startCar()

// stop here only 


            //                  LEARNING ABOUT METHODS
            //      We can only have methods inside of a class
            //   Array bhi ek class hi hoti hai 
// here is how we can create a method for our own use 

// Array.prototype.MyPush = function (item) {
//     next_index = this.length
//    this[next_index] = item
//    return this
// }

// const fruits = ['apple','kiwi','mango','peer']
// console.log(fruits.MyPush('strawberry'))
// console.log(fruits.MyPush('avacado'))
// fruits.MyPush('watermelon')
// fruits.MyPush('oranges')
// fruits.MyPush('peach' )
// console.log(fruits)



            // Creating a Bank Class    with deposit()  and  eithdraw() mehtods

class Bank {
    constructor( balance){
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
        console.log (` After depositing Rs.${amount} total Balance is Rs.${this.balance}`)
    }

    withdraw(amount){
        if(this.balance <= 0){
            this.balance -= 0
            console.log( 'insufficient Balance !!')
        }
        else{
        this.balance -= amount
        console.log(` After withdrawing Rs. ${amount} Total Balance is Rs.${this.balance}`)
        }
    }

    showBalance(account){
        console.log( `Balance of ${account} is : ${this.balance}`)
    }

}

const account_1 = new Bank (2000)
const account_2 = new Bank (4000)

// account_1.deposit(500)
// account_2.deposit(1000)
account_2.showBalance('account_2')

for(let i = 0; i< 5;i++){
    account_2.withdraw(1000)
}

