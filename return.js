function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(80, 20);
console.log('total', total);

// ....................................................

function briingSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singara = briingSingara(100);
console.log(singara);