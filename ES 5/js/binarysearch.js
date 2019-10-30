function binarySearch(el, arr) {
    console.log(arr);
    let search = Math.floor(arr.length / 2);
    console.log(search);
    if(el == arr[search]){
        return arr[search];
    }
    if(arr[search] < el/*&& arr.length > 1*/){
        return binarySearch(el, arr.slice(search))
    }

    if(arr[search] > el /*&& arr.length > 1*/){
        return binarySearch(el, arr.slice(0, search))
    }

}

function addToArray(n, arr) {
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr;
}

binarySearchBtn.addEventListener('click' , function(){
    let witch = binarySearchInputWhich.value;
    let how = binarySearchInputHow.value;
    if(witch == '' || how =='') return binarySearchDisplay.innerHTML = 'Не заполнено какое-либо из полей слева'
    addToArray(how, array);
    binarySearchDisplay.innerHTML = 'Число '  +  binarySearch(witch, array) + ' найдено' ;

});


