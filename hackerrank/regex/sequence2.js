// Task: You have a test string .
// Your task is to write a regex that will match  with the following conditions:

//  must be of length 6.
// First character should not be a digit (  or  ).
// Second character should not be a lowercase vowel (  or  ).
// Third character should not be b, c, D or F.
// Fourth character should not be a whitespace character ( \r, \n, \t, \f or <space> ).
// Fifth character should not be a uppercase vowel (  or  ).
// Sixth character should not be a . or , symbol.

var Regex_Pattern = /^[^0-9]{1}[^a|e|i|o|u]{1}[^b|c|D|F]{1}[\S]{1}[^A|E|I|O|U]{1}[^\.\,]{1}$/;