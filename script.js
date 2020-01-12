function getHistory() {
    "use strict";
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    "use strict";
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    "use strict";
    return document.getElementById("output-value").innerText;
}
//sperate number comma ex: 99,9999
function getFormattedNumber(num) {
    "use strict";
    //negative num
    if (num === "-") {
        return "";
    }
    var n = Number(num),
        value = n.toLocaleString("en");
    return value;

}

function printOutput(num) {
    "use strict";
    //to check there num empty "" or not
    if (num === "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }


}

//remove comma
function reverseNumberFormat(num) {
    "use strict";
    return Number(num.replace(/,/g, ''));
}

//list of operator 
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id === "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id === "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if( isNaN (history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }}
                //output = reverseNumberFormat(output);
               // history = history + output;
                if(output !="" || history != ""){
                    output=output==""?output:reverseNumberFormat(output);
                    history=history+output;
                if (this.id === "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}