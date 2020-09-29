class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;

   }

   insert(val) {
    let new_node = new TreeNode(val);
    if (this.root === null) {
        this.root = new_node
    } else {
        let curr = this.root;
        while (true) {
            //check to see if there's space available for the new_node
            if (curr.left === null || curr.right === null) {
                
            }
            //If less than left value, traverse down 
            //If not compare against right 
            //Keep iterating till we reach node that has open spot 
        }
    }

}


}

module.exports = {
    TreeNode,
    BST
};






insert(value) {
    if (this.root) {
        this._insert(this.root, value);
    } else {
        this.root = new TreeNode(value)
    }
}

_insert(root,value) {
    if (value < root.value) {
        if (root.left) {
            this._insert(root.left, value)
        } else {
            root.left = new TreeNode(value)
            root.left.parent = root 
        }
    } else {
        if (root.right) {
            this._insert(root.right, value)
        } else {
            root.right = new TreeNode(value);
            root.right.parent = root 
        }
    }
}