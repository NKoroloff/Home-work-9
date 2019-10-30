let binaryTreeBtn = document.getElementById('binary-tree__btn');
let binaryTreeInputPush = document.getElementById('binary-tree__input__push');
let binaryTreeInputFind = document.getElementById('binary-tree__input__find');
let binaryTreeDisplay = document.getElementById('binary-tree__display');


binaryTreeBtn.addEventListener('click', function () {
    tree.addToTree(binaryTreeInputPush.value, randArray)
    binaryTreeDisplay.innerHTML = tree.search(binaryTreeInputFind.value)
})

class BinnaryTree{
    constructor(){
        this.root = null;
    }
}

class CreateTreeNode{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;

    }
}


BinnaryTree.prototype.addToTree = function (n, arr) {
    for(let i = 0; i <=n;i++){
        this.push(arr[i])
    }
};

BinnaryTree.prototype.search = function (searchEl , nextStep) {

    let tmpNode;
    if(nextStep == undefined){
        tmpNode = this.root;
    }
    else{
        tmpNode = nextStep;
    }
    console.log( `${tmpNode.data} `);
    if(tmpNode.data == searchEl){
        return tmpNode.data;
    }
    else if( searchEl < tmpNode.data && tmpNode.left != null ){
        return this.search(searchEl, tmpNode.left)
    }
    else if(searchEl > tmpNode.data && tmpNode.right != null ){
        return this.search(searchEl, tmpNode.right)
    }
    else{
        console.log(`мы не нашли элемент ${searchEl}`);
        return false;
    }
};

BinnaryTree.prototype.push = function (el, nextStep)  {
    const noda = new CreateTreeNode(el);
    let tmpNoda;
    if(nextStep === undefined){
        tmpNoda  = this.root;
    }
    else {
        tmpNoda = nextStep
    }

    if(this.root == null){
        this.root = noda;
    }
    else {
        if (el >= tmpNoda.data && tmpNoda.right != null) {
            return this.push(el, tmpNoda.right)
        } else if (el < tmpNoda.data && tmpNoda.left != null) {
            return this.push(el, tmpNoda.left)
        }else if(el >= tmpNoda.data){
            tmpNoda.right = noda;
        }else if(el < tmpNoda.data){
            tmpNoda.left = noda;
        }
    }
};

