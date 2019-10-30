let array = [];
const tree = new BinnaryTree();
let randArray = randomNums(500000);
let resetBtn = document.getElementById('reset');
let factorailBtn = document.getElementById('factorail-btn');
let fibonacciBtn = document.getElementById('fibonacci__btn');
let recursivelyBtn = document.getElementById('recursively-btn');
let fibonacciInput = document.getElementById('fibonacci__input');
let factorailInput = document.getElementById('factorail__input');
let factorailDisplay = document.getElementById('factorail-display');
let binarySearchBtn = document.getElementById('binary-search__btn');
let fibonacciDisplay = document.getElementById('fibonacci__display');
let recursivelyDisplay = document.getElementById('recursively-display');
let binarySearchDisplay = document.getElementById('binary-search__display');
let binarySearchInputHow = document.getElementById('binary-search__input__how');
let binarySearchInputWhich = document.getElementById('binary-search__input__which');

function randomNums(quantity) {
    let n = [];
    for(let i =0; i< quantity; i++){
        n.push(Math.floor(Math.random()* 10000))
    }
    return n;
}

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