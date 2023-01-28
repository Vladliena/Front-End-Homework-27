function addition (x) {
    return function(y) {
        return x + y;
    };
}

const add3 = addition(3);
const add5 = addition(5);
const add20 = addition(20);

console.log(add3(0));
console.log(add5(3));
console.log(add20(8));
