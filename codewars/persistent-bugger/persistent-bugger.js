//Write a function, persistence, that takes in a positive parameter num and returns its 
//multiplicative persistence, which is the number of times you must multiply the digits in num until you 
//reach a single digit.

function persistence(num) {

    const sequenceString = num.toString()

    if(sequenceString.length === 1) return 0

    const arrayString = Array.from(sequenceString)
    const arrayInteger = arrayString.map( num => parseInt(num) )
    
    function mult(total, num){
        return total * num
    }

    let result = arrayInteger.reduce(mult)
    
    return 1 + persistence(result)
 }

 console.log(persistence(39), persistence(4), persistence(25),persistence(999))
