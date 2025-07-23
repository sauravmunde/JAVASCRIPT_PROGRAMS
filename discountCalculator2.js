
function discountCalculator(totalAmount) {

    let discount = 0;

    if(totalAmount >= 100) {

        discount = 10

    }else if (totalAmount >= 50) {

        discount = 5

    }else{

        return totalAmount;
    }
    discount = totalAmount * (discount/100);
    return totalAmount - discount;

}
console.log(discountCalculator(80));

