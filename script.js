// ======================= TEST ============================
// Get all botton with class"button"
// let BtnValue = document.querySelector(".button").value;

// Fix the BtnValue[indexs] to single index
//     {
//         console.log(BtnValue[i].value)
//     }
// for (let i = 0; i < BtnValue.length; i++)
// ======================= TEST ============================

// Set result box with id "result"
let resultBox = document.getElementById("result");
function get(BtnValue) {

    // Display default value "0"

    if (resultBox.value == "0") {
        resultBox.value = ""
        resultBox.value += BtnValue;
    } else {
        resultBox.value += BtnValue;
    }

}


function cal() {
    // result = Calculate the Display value
    var result = resultBox.value = eval(resultBox.value);
    // If result is not number display ERROR
    if (typeof result !== Number) {
        result = "ERROR"
    }

    // TEST
    // console.log(result)
    // console.log(typeof result)
}


// Press C to clean all value and set Display to 0
function clean() {
    resultBox.value = "0"
}
