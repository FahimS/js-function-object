var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

//when you want to know specific properties value
var penCount = shoppingCart.pen;
var penCount = shoppingCart[pen];
// console.log(shoppingCart);
console.log(penCount);

// when you want to know the properties name 
var properties = Object.keys(shoppingCart);
console.log(properties);

// when you want to know the properties values 
var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);