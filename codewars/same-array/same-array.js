// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays 
//have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(arr1, arr2){

    if (arr1 === null || arr2 === null) return false
    
    function sumItems(total, num){
        return total + num
    }

    const sumArr2 = arr2.map(element => Math.sqrt(element))
    return arr1.reduce(sumItems) === sumArr2.reduce(sumItems) ? true : false
}

console.log(comp([2, 2, 3,8,8], [4, 4, 64,64,9]), comp([null,1],[1,null]), comp([] , null))

