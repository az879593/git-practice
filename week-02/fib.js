function fibRecursive(n){

    if(n == 0){
        return 0;
    }

    if(n == 1){
        return 1;
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fib(n){

    if(n == 0){
        return 0;
    }

    if(n == 1){
        return 1;
    }

    let dpFib = new Array(n + 1);
    dpFib[0] = 0;
    dpFib[1] = 1;
    for(let index = 2; index < n + 1; index++){
        dpFib[index] = dpFib[index - 1] + dpFib[index - 2]; 
    }

    return dpFib[n];
}

console.log(fibRecursive(0)); 
console.log(fibRecursive(1)); 
console.log(fibRecursive(5)); 
console.log(fibRecursive(10)); 

console.log(fib(0)); 
console.log(fib(1)); 
console.log(fib(5)); 
console.log(fib(10)); 