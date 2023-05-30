/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues(parent=this.root) {
      if (this.root === null) return 0;
      let sum = parent.val;
      for (let node of parent.children) {
        if (node.children.length > 0) {
          sum += this.sumValues(node);
        } else {
          sum += node.val;
        }
      }
      return sum;
    }
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens(parent=this.root) {
      if (this.root === null) return 0;
      let count = parent.val % 2 === 0 ? 1 : 0;
      for (let node of parent.children) {
        if (node.children.length > 0) count += this.countEvens(node);
        else node.val % 2 === 0 ? count++ : undefined;
      }
      return count;
    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound, parent=this.root) {
      if (this.root === null) return 0;
  
      let count = parent.val > lowerBound ? 1 : 0;
      for (let node of parent.children) {
        if (node.children.length > 0) {
          count += this.numGreater(lowerBound, node);
        } else {
          node.val > lowerBound ? count++ : undefined;
        }
      }
      return count;
    }
  }
  
  module.exports = { Tree, TreeNode };