/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return compare(root.left, root.right)
};

function compare(left, right) {
  if (!left && !right) {
    return true
  } else if (left && !right || !left && right) {
    return false
  } else if (left.val !== right.val) {
    return false
  } else {
    return compare(left.left, right.right) && compare(left.right, right.left)
  }
}