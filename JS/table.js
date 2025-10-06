function numberToWords(num) {  /*aek function banaya gaya ha jo number ko words me convert karega.*/
    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"];      /*0 se 19 tak ke words.*/
    var tens = ["", "", "twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"];       /*20, 30, 40... 90 tak ke words.*/

    // Base case
    if (num === 0) return "zero";            /*Agar user ne 0 diya ho to seedha "zero" return kar do.*/

    // Recursive function
    function convert(n) {
        var words = "";

        if (n < 20) {
            words = ones[n];
        } else if (n < 100) {
            words = tens[Math.floor(n / 10)];
            if (n % 10 > 0) {
                words += "-" + convert(n % 10);
            }
        } else if (n < 1000) {
            words = convert(Math.floor(n / 100)) + " hundred";
            if (n % 100 > 0) {
                words += " and " + convert(n % 100);
            }
        }
        return words;
    }

    return convert(num);
}

// ---- User input ----
var input = prompt("Enter a number (up to 3 digits):");
var number = parseInt(input);

if (number >= 0 && number <= 999) {
    var result = numberToWords(number);
    console.log("Number in words:", result);
} else {
    console.log("Please enter a number between 0 and 999");
}

    </script>