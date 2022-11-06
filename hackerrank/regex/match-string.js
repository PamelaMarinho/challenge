
function processData(Test_String) {
    var Regex_Pattern = /hackerrank/i;
    var Regex = new RegExp(Regex_Pattern, "g");
    var Array = Test_String.match(Regex);
    console.log("Number of matches :", Array.length);
}

processData("hackerrank")