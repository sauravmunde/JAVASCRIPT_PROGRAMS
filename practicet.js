function discountCalculator(origionalValue , disPercentage){

    let value1  = +origionalValue;
    let value2 = +disPercentage;

    let answer = value1 * value2/100;
    return value1-  answer;
}

 let origionalValue = "50.75";
 let Dispercentage ="15.5";

 let answer = discountCalculator(origionalValue , Dispercentage);
 console.log(answer);