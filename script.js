function calculateFare() {
    let age = document.getElementById("age").value;
    let output = (age <= 19) ? "You can pay child’s fare" : "You must pay the adult fare";
    document.getElementById("fareOutput").innerText = output;
}

function showFoodPreference() {
    let name = document.getElementById("userName").value;
    let food = document.getElementById("food").value;
    document.getElementById("foodOutput").value = `${name} loves ${food}!`;
}
