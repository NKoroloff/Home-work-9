let binaryTreePush = document.getElementById('binary-tree-compare__input__push');
let binaryTreeFind = document.getElementById('binary-tree-compare__input__find');
let binaryTreeCompareBtn = document.getElementById('binary-tree-compare__btn');
let linkedListDisplayCompare = document.getElementById('linked-list-compare__display');
let binaryTreeDisplayCompare = document.getElementById('binary-tree-compare__display');
let compareDisplayLinked = document.getElementById('compare__display-linked');
let wrapSpin = document.getElementsByClassName('wrap')

const linkedCompare = new SuperLList();
const treeCompare = new BinnaryTree();
let randArrayCompare = [];
randArrayCompare = randomNums(500000);

binaryTreeCompareBtn.addEventListener('click' , function(){

    if(binaryTreePush.value === '' || binaryTreeFind.value === '') {
        linkedListDisplayCompare.innerHTML = 'Введите количество чисел для поиска в левый input'
        binaryTreeDisplayCompare.innerHTML = 'Введите искомое число в правый input'
        return;
    }
    treeCompare.addToTree(binaryTreePush.value,randArrayCompare)
    linkedCompare.addToArray(binaryTreePush.value,randArrayCompare)
    compareLists();
})

let compareLists = () =>{
    let startList = performance.now();
    linkedCompare.findEl(binaryTreeFind.value,randArrayCompare);
    let endList = performance.now();
    let startTree = performance.now();
    treeCompare.search(binaryTreeFind.value,randArrayCompare);
    let endTree = performance.now();
    compareDisplayLinked.innerHTML = linkedCompare.findEl(binaryTreeFind.value,randArrayCompare);
    linkedListDisplayCompare.innerHTML = "Linked List Search Time " + (endList - startList) + " milliseconds.";
    binaryTreeDisplayCompare.innerHTML = "Binnary Tree Search Time " + (endTree - startTree) + " milliseconds.";
}
