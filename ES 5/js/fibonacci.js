let fibonacciDisplay = document.getElementById('fibonacci__display');
let fibonacciInput = document.getElementById('fibonacci__input');
let fibonacciBtn = document.getElementById('fibonacci__btn');
let resetBtn = document.getElementById('reset');

const fibonachi = (n,f = 0,s = 1) =>{
    /*if(n <= 1) return n;
    else return fibonachi(n-1) + fibonachi(n-2);*/
    if(n <= 2) return  s + f;

    else{
        let count = s + f;
        f = s;
        s = count;
        n--;
        return fibonachi(n, f ,s)
    }
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
    console.log(fibonacciInput.value)
    if(fibonacciInput.value === '') return fibonacciDisplay.innerHTML = 'Введите число в поле слева'
    fibonacciDisplay.innerHTML = fibonachi(parseInt(fibonacciInput.value));
})

resetBtn.addEventListener('click' , function () {
    fibonacciInput.value = '';
    fibonacciDisplay.innerHTML = '';
    binarySearchDisplay.innerHTML = '';
    binarySearchInputWhich.value = '';
    binarySearchInputHow.value = '';
    factorailInput.value = '';
    factorailDisplay.innerHTML = '';
    recursivelyDisplay.innerHTML = ''
})