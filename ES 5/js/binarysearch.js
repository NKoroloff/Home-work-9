let binarySearchInputWhich = document.getElementById('binary-search__input__which');
let binarySearchInputHow = document.getElementById('binary-search__input__how');
let binarySearchDisplay = document.getElementById('binary-search__display');
let binarySearchBtn = document.getElementById('binary-search__btn');


binarySearchBtn.addEventListener('click' , function(){
    let witch = binarySearchInputWhich.value;
    let how = binarySearchInputHow.value;
    if(witch == '' || how =='') return binarySearchDisplay.innerHTML = 'Не заполнено какое-либо из полей слева'
    addToArray(how, array);
    binarySearchDisplay.innerHTML = binarySearch(witch, array);

});

let array = [];

function binarySearch(el, arr) {
    console.log(arr);
    let search = Math.floor(arr.length / 2);
    console.log(search);
  /*  let tmp;*/

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



