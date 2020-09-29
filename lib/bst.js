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
            this.root = new_node;
            return;
        } else {
            let curr = this.root;
            while (true) {
                // console.log(curr.val);
                if (curr.left === null) {
                    // console.log('first conditional');
                    if (new_node.val < curr.val) {

                        curr.left = new_node;
                        // console.log('reached line 27');
                        return;
                    }
                }
                if (curr.right === null) {
                    // console.log('second conditional');
                    if (new_node.val >= curr.val) {
                        curr.right = new_node;
                        // console.log('reached line 33');
                        return;
                    }
                }
                // console.log('third condition');
                if (new_node.val < curr.val) {
                    curr = curr.left;
                    // console.log('reached line 38');
                } else {
                    curr = curr.right;
                    // console.log('reached line 41');

                }
            }

        }
    }

    searchRecur(val, node = this.root) {
        if (!node) {
            return false;
        } else {
            if (val === node.val) {
                return true;
            }
            if (val < node.val && node.left) {
                return this.searchRecur(val, node.left)
            }
            if (val >= node.val && node.right) {
                return this.searchRecur(val, node.right);
            }
            return false;
            // return this._searchRecur(val, this.root)
        }
    }

    searchIter(val) {
        let nodes = [this.root];
        if (this.root === null) {
            return false;
        }

        while (nodes.length) {
            let node = nodes.shift();
            if (node.val === val) {
                return true;
            } else if (node.left && node.left.val === val) {
                return true;
            } else if (node.right && node.right.val === val) {
                return true;
            }
            if (node.left) {
                nodes.push(node.left)
            }
            if (node.right) {
                nodes.push(node.right)
            }
            // console.log(nodes);
        }
        return false;
    }
}

// let bst = new BST();
// bst.insert(10);
// bst.insert(2);
// bst.insert(7);
// bst.insert(4);
// bst.insert(8);
// bst.insert(6);
// console.log(bst.searchIter(11));


module.exports = {
    TreeNode,
    BST
}
