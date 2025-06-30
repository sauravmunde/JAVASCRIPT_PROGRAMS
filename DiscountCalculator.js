//Convert the type to numbers
//Calculate the discountedprice
function shoppingDiscountCalculator(originalValue,discountPercentage){
    let StringValue1 = +originalValue
    let StringValue2 = +discountPercentage

    let answer = StringValue1 * StringValue2/100 ;
    return StringValue1 - answer

}
let originalValue = "50.75"

let discountPercentage = "15.5"

let Dis  = shoppingDiscountCalculator(originalValue , discountPercentage)

console.lotg(Dis)