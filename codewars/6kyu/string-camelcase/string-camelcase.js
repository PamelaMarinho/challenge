// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//  The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp, function(match){
        return match.charAt(1).toUpperCase()
    })
}

console.log(toCamelCase("the-stealth_warrior"))      
console.log(toCamelCase("A-B-C"))
console.log(toCamelCase("The-Stealth-Warrior"))

//the second parameter, a function,  receive the match 