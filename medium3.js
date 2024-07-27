let a = parseFloat(prompt("Введите длину стороны a:"))
let b = parseFloat(prompt("Введите длину стороны b:"))
let c = parseFloat(prompt("Введите длину стороны c:"))

if (a + b > c && a + c > b && b + c > a) {
    alert("Да, такой треугольник существует.")
} else {
    alert("Нет, такой треугольник не существует.")
}
