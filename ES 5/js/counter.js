recursivelyBtn.addEventListener('click', function () {
    recursivelyDisplay.innerHTML = count();
});
let count = makeCounter();
function makeCounter() {
    function counter() {
        console.log(counter.currentCount)
        return counter.currentCount++;
    };
    
    counter.currentCount = 1;
    
    return counter;
}



