// Task: Given a test string, , write a RegEx that matches  under the following conditions:

//  must start with Mr., Mrs., Ms., Dr. or Er..
// The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).

var Regex_Pattern = /^(Mr|Mrs|Ms|Dr|Er){1}\.{1}[a-zA-Z]+$/