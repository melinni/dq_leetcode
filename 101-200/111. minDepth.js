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
var minDepth = function(root) {
  return getDepth(root, 0)
};

function getDepth(root) {
  if (!root) return 0
  if (root && !root.left && !root.right) return 1
  if (root && !root.left && root.right) return getDepth(root.right) + 1
  if (root && root.left && !root.right) return getDepth(root.left) + 1
  return Math.min(getDepth(root.left), getDepth(root.right)) + 1
}