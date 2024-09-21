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

console.log(sum([1, 5, 3, 2])); // 11
console.log(sumES6([1, 5, 3, 2])); // 11
console.log(sumRecursive([1, 5, 3, 2])); //11
