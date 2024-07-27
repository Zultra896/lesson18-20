let a = parseFloat(prompt("Введите длину стороны a:"))
let b = parseFloat(prompt("Введите длину стороны b:"))
let c = parseFloat(prompt("Введите длину стороны c:"))

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        alert("Треугольник равносторонний.")
    } else if (a == b || b == c || c == a) {
        alert("Треугольник равнобедренный")
    } else {
        alert("Треугольник разносторонний")
    }
} else {
    alert("Нет, такой треугольник не существует.")
}