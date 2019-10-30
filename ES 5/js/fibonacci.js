


const fibonacci = (n,f = 0,s = 1) =>{
    if(n <= 1) return n;
    else return fibonacci(n-1) + fibonacci(n-2);
/*    if(n <= 2) return  s + f;

    else{
        let count = s + f;
        f = s;
        s = count;
        n--;
        return fibonachi(n, f ,s)
    }*/
 /*   let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;*/
}

fibonacciBtn.addEventListener('click' , function () {
    var t0 = performance.now();
    if(fibonacciInput.value === '') return fibonacciDisplay.innerHTML = 'Введите число в поле слева'
    fibonacciDisplay.innerHTML = fibonacci(parseInt(fibonacciInput.value));
    var t1 = performance.now();
    console.log(fibonacciInput.value)
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

});

