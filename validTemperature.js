

function shoppingDiscountCalculator(originalValue, discountPercentage) {
    // Convert the string inputs to float numbers
    let originalPrice = parseFloat(originalValue);
    let discountRate = parseFloat(discountPercentage);

    // Calculate the discount amount
    let discountAmount = (originalPrice * discountRate) / 100;

    // Calculate the final discounted price
    let finalPrice = originalPrice - discountAmount;

    // Return the final price rounded to two decimal places
    return parseFloat(finalPrice.toFixed(2));
}

// Example usage
let originalValue = "50.75";
let discountPercentage = "15.5";
let discountedPrice = shoppingDiscountCalculator(originalValue, discountPercentage);
console.log("Discounted Price =", discountedPrice);




<!--Problem statement
Create a function named temperatureInCelcius to analyze temperature data. The function should:

Take a temperature in Celsius as input.
Convert the temperature to Fahrenheit using the formula:
Fahrenheit = (Celsius×9/5)+32
Determine if the converted Fahrenheit value is greater than 86. If it is, return true; otherwise, return false.

Input:
Temperature(in celsius): 35
Output
true -->
