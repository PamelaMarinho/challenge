// Task: You have a test String .
// Your task is to write a regex which will match word starting with vowel (a,e,i,o, u, A, E, I , O or U).
// The matched word can be of any length. The matched word should consist of letters (lowercase and uppercase both) only.
// The matched word must start and end with a word boundary.

var Regex_Pattern = /\b[aeiou][a-z]*\b/i;