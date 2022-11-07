// Task: You have a test string .
// Your task is to write a regex that will match  using the following conditions:

//  should begin with  or more digits.
// After that,  should have  or more lowercase letters.
//  should end with  or more uppercase letters

var Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/;