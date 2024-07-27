let number = Number(prompt("random number"))

if (number <= 0) {
    alert("Некорректное количество кусков")
}   else if (number == 1) {
    alert("1 кусок")
}   else {
    alert("Количество кусков: "+ number + " под углом "+ 360/number + " градусов")
}