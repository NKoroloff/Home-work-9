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
/*
function CreateTreeNode (data){
    this.left = null;
    this.right = null;
    this.data = data;
}
*/

BinnaryTree.prototype.push = function (el, nextStep)  {
    const noda = new CreateTreeNode(el)
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
            console.log(tmpNoda);
            return this.push(el, tmpNoda.right)
        } else if (el < tmpNoda.data && tmpNoda.left != null) {
            console.log(tmpNoda);
            return this.push(el, tmpNoda.left)
        }else if(el >= tmpNoda.data){
            tmpNoda.right = noda;
        }else if(el < tmpNoda.data){
            tmpNoda.left = noda;
        }
    }
};





/*
BinnaryTree.prototype.push = function (el, noda2) {
    const noda = new CreateTreeNode(el);
    let tmpNoda;

    if(noda2 === undefined){
        tmpNoda = this.root;
    }
    else{
        tmpNoda = noda2;
    }

    if(el > tmpNoda.data && tmpNoda.right != null){
        this.push(el , tmpNoda.right)
    }else if(el < tmpNoda.data && tmpNoda.left != null){
        this.push(el , tmpNoda.left)
    } else if(el > tmpNoda.data){
        tmpNoda.right = noda;
    } else if(el < tmpNoda.data){
        tmpNoda.left = noda;
    }
}*/


const tree = new BinnaryTree();
tree.push(25);
tree.push(21);
tree.push(23);
tree.push(4);
tree.push(5);
tree.push(77);
tree.push(323);
tree.push(99);
tree.push(33);
tree.push(100);
tree.push(44);
tree.push(99);
console.log(tree)
BinnaryTree.prototype.pop = () => {

};
BinnaryTree.prototype.findElement = (el) => {

};