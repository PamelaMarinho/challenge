function squareDigits(num){
    const arr = num.toString().match(/[0-9]/g)
    const sqrtArray = arr.map( num => {
        return num*num
    })
    return parseInt(sqrtArray.join(""))
}

console.log(squareDigits(3212))