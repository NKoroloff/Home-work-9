const factorial = (n) =>{
    if(n === 1) return n;
    else return  n * factorial(n-1);
};

factorailBtn.addEventListener('click', function () {
    let n = factorailInput.value;
    if (n === '') return factorailDisplay.innerHTML = 'Введите число в поле слева';
    factorailDisplay.innerHTML = factorial(n);
});