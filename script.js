

// let resultBox = []
let btn = document.getElementsByClassName("button")
let display = document.getElementsByClassName("resultDisplay")[0]


// document.addEventListener("click", clickBtn)


// let displayArr = ""

for (i = 0; i < btn.length; i++) {

    btn[i].onclick = function () {

        // If display is blank or "." , show "0."
        if (display.value === "" && btn.value === ".") {
            display.value = "0."
        } else {

            if (!isNaN(btn.value) || btn.value === ".") {
                if (txt.value.indexOf(".") != -1) {
                    /*有点存在的情况*/
                    if (btn.value != ".") {
                        /*当前按得不是点，进行拼接*/
                        txt.value += btn.value;
                    }

                    else {
                        /*是符号的情况*/
                        //先存值  在清屏
                        if (btn.value != "=") {
                            /*是符号但不为等号的情况*/
                            way_res[way_res.length] = txt.value;
                            //存符号
                            way_res[way_res.length] = btn.value;
                            //清屏
                            txt.value = "";
                        }
                        else {
                            /*是等号的情况*/
                            way_res[way_res.length] = txt.value;
                            //eval()方法   专门用来计算表达式的值
                            txt.value = eval(way_res.join(""));
                            //计算完成之后将数组清空
                            way_res = [];
                        }


                    }

                }
            }
        }
    }
}
    // return displayArr





// for (var i = 0; i < btnText.length; i++) {
//     btnText[i].onclick = function () {

// console.log(btnText)
// }
// }
// console.log(result.value)



// function check() {


//     let resultBox = []

//     //=============== Run loop from all button of btnText "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "0", "*", "+", "-", "."
//     for (var i = 0; i < btnText.length; i++) {

//         //=============== If Any btnText clicked , active function
//         btnText[i].onclick = function () {

//             if (display.value = "" && btnText[i].value === ".") {
//                 display.value = "0."
//             }
//             else {

//                 //=============== If btnText value is "number" or "."
//                 if (!isNaN(btnText[i].value) || btnText[i].value === ".") {


//                     //=============== If there is "." in display
//                     if (display.value.indexof(".") === 0) {

//                         if ((btnText[i].value) !== ".") {
//                             display.value += btnText[i].value
//                         }

//                     }
//                     else {
//                         display.value += btnText[i].value
//                     }

//                 }

//                 //=============== Else btnText value is "/" "*" "+" "-"
//                 else {

//                 }
//             }
//         }
//     }
// }




// console.log(check())

// console.log(btnText[13].value)


// // function check() {
// //     let resultBox = []

// //     for (var i = 0; i < btnText.length; i++) {
// //         btnText[i].onclick = function () {

// //         }
// //         resultBox.push(btnText[i].value)





// //     }
// //     return resultBox
// // }
