
let recursivelyBtn = document.getElementById('recursively-btn')
let recursivelyDisplay = document.getElementById('recursively-display')

recursivelyBtn.addEventListener('click', function () {
    recursivelyDisplay.innerHTML = count();
});

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    };
    counter.currentCount = 1;
    return counter;
}

let count = makeCounter();

