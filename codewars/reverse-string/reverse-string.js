// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

const a = []

function reverseWords(str){
    const each = str.split(" ")
    const arr = each.forEach( element => {
        a.push( element.split("").reverse().join("") )
    });
}

let reverse = reverseWords("reverse all words")
console.log(a.join(" "))