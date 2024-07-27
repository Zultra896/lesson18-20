let num1 = prompt("random number")
let num2 = prompt("random number")
let num3 = prompt("random number")



if (num1 >= num2 && num1 >= num3) {
    alert("num1 наибольшее число")
} else if (num1 <= num2 && num2 >= num3) {
    alert("num2 наибольшее число")
} else {
    alert("num3 наибольшее число")
}