// Code your solutions in this file
function writeCards(names, adj){
    let thankYous = []
    for (let i = 0; i < names.length; i++){
       thankYous.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
    }
    return thankYous
}

function countDown(num){
    let i = num
    while(i >= 0){
        console.log(i)
        i -=1
    }
   
    
}

// function countDown(num){
//     for (let i = num; i >= 0; i -=1){
//         console.log(i)
//     }
// }