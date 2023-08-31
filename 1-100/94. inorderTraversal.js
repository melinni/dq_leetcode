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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  traverse(root, res)
  return res
};

function traverse(cur, res) {
  if (!cur) return
  traverse(cur.left, res)
  res.push(cur.val)
  traverse(cur.right, res)
}