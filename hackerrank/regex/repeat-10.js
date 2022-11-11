// Task: You have a test string .
// Your task is to write a regex that will match  with the following conditions:

//  must be of length: 20
//  character: lowercase letter.
//  character: word character.
//  character: whitespace character.
//  character: non word character.
//  character: digit.
//  character: non digit.
//  character: uppercase letter.
//  character: letter (either lowercase or uppercase).
//  character: vowel (a, e, i , o , u, A, E, I, O or U).
//  character: non whitespace character.
//  character: should be same as 1st character.
//  character: should be same as 2nd character.
//  character: should be same as 3rd character.
//  character: should be same as 4th character.
//  character: should be same as 5th character.
//  character: should be same as 6th character.
//  character: should be same as 7th character.
//  character: should be same as 8th character.
//  character: should be same as 9th character.
//  character: should be same as 10th character.

var Regex_Pattern = /^([a-z]{1})(\w{1})(\s{1})(\W{1})(\d{1})(\D{1})([A-Z]{1})([a-zA-Z]{1})([a|e|i|o|u|A|E|I|O|U]{1})(\S{1})\1\2\3\4\5\6\7\8\9\10$/; 