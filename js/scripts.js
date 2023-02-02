function addition (){
    let sum = 0;
    return function counter (add){
        sum += add
        console.log(sum)
        return sum
    };
}

const add = addition();
add(3)
add(5)
add(20)