function addition (n){
    let sum = n;
    return function (add){
        sum = sum + add
        return sum
    };
}

const add = addition(3);
add(5);
add(20);

// function addition (){
//     let sum = 0;
//     return function counter (add){
//         sum += add
//         return sum
//     };
// }
//
// const add = addition();
// add(3)
// add(5)
// add(20)