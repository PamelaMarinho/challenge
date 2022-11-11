// Task: You have a test string . Your task is to write a regex which will match , with following
//  condition(s):  consists of 8 digits.  may have "" separator such that string  gets 
//  divided in  parts, with each part having exactly two digits. (Eg. 12-34-56-78)

var Regex_Pattern = /^[a-zA-Z]*s+$/i;

// ^\d{2}(-?)\d{2}\1\d{2}\1\d{2}$