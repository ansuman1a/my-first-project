const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const value = input.value.trim();

    if (value === "") {
        alert("Please input a value");
        return;
    }

    const cleaned = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        result.textContent = `${value} is a palindrome`;
    } else {
        result.textContent = `${value} is not a palindrome`;
    }
});