// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    const arr = num.toString().match(/[0-9]/g)
    const sqrtArray = arr.map( num => {
        return num*num
    })
    return parseInt(sqrtArray.join(""))
}

console.log(squareDigits(3212))
