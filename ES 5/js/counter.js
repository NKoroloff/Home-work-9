recursivelyBtn.addEventListener('click', function () {
    recursivelyDisplay.innerHTML = count();
});
let count = makeCounter();
function makeCounter() {
    function counter() {
        return counter.currentCount++;
    };
    counter.currentCount = 1;
    return counter;
}



