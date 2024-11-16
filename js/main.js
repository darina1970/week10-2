function calculateTotalPrice(quantity = 2, price = 15000000) {
    return quantity * price;
}

let result = calculateTotalPrice();
let rubResult = result.toLocaleString("ru-Ru", {style: "currency", currency: "RUB"});
let message = `Стоимость покупки: ${rubResult}`;

function showTotalPrice() {
    alert(message);
}








