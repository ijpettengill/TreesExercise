/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */
  
    minDepth(currNode=this.root, n=1) {
      if (this.root === null) return 0;
      if (!currNode.left || !currNode.right) return n;
      return Math.min(this.minDepth(currNode.left, n + 1), this.minDepth(currNode.right, n + 1));
    }
  
    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */
  
    maxDepth(currNode=this.root, n=1) {
      if (this.root === null) return 0;
      if (!currNode.left && !currNode.right) return n;
      return Math.max(this.maxDepth(currNode.left, n + 1), this.maxDepth(currNode.right, n + 1));
    }
  
    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */
  
    maxSum(parent=this.root) {
      let sum = Number.NEGATIVE_INFINITY;
  
      function maxSumHelper(parent=this.root) {
        if (parent === null) return 0;
    
        const left = maxSumHelper(parent.left);
        const right = maxSumHelper(parent.right);
        const result = Math.max(parent.val, parent.val + left, parent.val + right);
    
        sum = Math.max(sum, result, parent.val + left + right);
    
        return result;
      }
  
      maxSumHelper(parent);
  
      return sum < 0? 0 : sum;
    }
  
    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */
  
    nextLarger(lowerBound, currNode=this.root, smallest=null) {
      if (this.root === null) return null;
  
      if ((!smallest || currNode.val < smallest) && currNode.val > lowerBound) {
        smallest = currNode.val;
      }
  
      if (currNode.left) {
        smallest = Math.min(smallest, this.nextLarger(lowerBound, currNode.left, smallest));
      }
      if (currNode.right) {
        smallest = Math.min(smallest, this.nextLarger(lowerBound, currNode.right, smallest));
      }
      return smallest ? smallest : null;
    }
  
    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */
  
    areCousins(node1, node2) {
      
    }
  
    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */
  
    static serialize() {
  
    }
  
    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
  
    static deserialize() {
  
    }
  
    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */
  
    lowestCommonAncestor(node1, node2) {
      
    }
  }
  
  module.exports = { BinaryTree, BinaryTreeNode };