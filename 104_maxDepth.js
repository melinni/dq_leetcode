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
 * @return {number}
 */
var maxDepth = function(root) {
  return getDepth(root, 0)
};

function getDepth(root, height) {
  if (!root) return height
  return Math.max(getDepth(root.left, height+1), getDepth(root.right, height+1))
}