// ary: number array

// approach 1
function sum(ary) {
	// TODO: sum all elements in ary
    let result = ary.reduce(function(sum, value){
        return sum += value;
    });

    return result;
}

// approach 2: ES6
function sumES6(ary) {
	// TODO: sum all elements in ary
    let result = ary.reduce((a, b) => a + b);    

    return result;
}

// approach 3: Recursive
function sumRecursive(ary){
    if(ary.length == 1){
        return ary[0];
    }

    let lastValue = ary[ary.length - 1];
    ary.length --;
    return lastValue + sumRecursive(ary);
}

// 如果input為n要return 1+2+...+n 不用for while

// approach 1: recurisive

function sum1toNRecursive(n){
    return n == 1 ?  1 : n + sum1toNRecursive(n - 1) ;
}

// approach 2: 上底加下底

function sum1toN(n){
    return (1 + n) * n / 2;
}

console.log(sum([1, 5, 3, 2])); // 11
console.log(sumES6([1, 5, 3, 2])); // 11
console.log(sumRecursive([1, 5, 3, 2])); //11

console.log(sum1toNRecursive(10)); // 55
console.log(sum1toNRecursive(9));  // 45
console.log(sum1toN(10)); // 55
console.log(sum1toN(9)); // 45