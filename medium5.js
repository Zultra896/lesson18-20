let weight = parseFloat(prompt("random weight"))
let country = prompt("country")

let price

if (weight <= 1) {
    price = 10
} else if (weight > 1 && weight <= 5) {
    if (country === "США") {
        price = 20
    } else {
        price = 30
    }
} else {
    price = 50
}

alert("Стоимость доставки: " + price)