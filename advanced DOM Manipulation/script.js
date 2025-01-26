
        //   * *   WHILE LOOPS 

    // for loops - when you know how many times to loop
    // while loops - when you dont know how many times to loop 

    let num = 5
    while ( num < 10){
        console.log('looping')
        num ++
    }


        //   * *   addEventListener

// this is the onclick way              
// const playDiv = document.getElementById('play')
// playDiv.onclick = () => {
//     console.log('Console using onclick ')
// }

// // this is usig addEventListener
// playDiv.addEventListener('click' , function(){
//     console.log('console using addEventListener')
// })


document.addEventListener('keydown',function(e) {
    if(e.key =='q'){
        console.log('You pressed Q')
    document.getElementById('punch').play()
    }
    else{
        console.log('not Q')
    }
})
// 'keydown' -0 gesture that we will do
// function - this function will execute 



            //   * *  <audio> Tags