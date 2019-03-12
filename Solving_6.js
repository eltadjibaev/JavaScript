//////////////1.
function pow(num1, num2) {
    if(num2 === 1) { return num1; }
    else if(num2 === 0) { return 0; }
    return num1 * pow(num1, num2 - 1);
}

console.log(pow(2, 4));