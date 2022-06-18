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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = []
  traverse(root, [], res)
  return res
};

function traverse(root, path, res) {
  path.push(root.val)
  if (!root.left && !root.right) {
    res.push(path.join("->"))
  }

  if (root.left) {
    traverse(root.left, path, res)
    path.pop()
  }
  if (root.right) {
    traverse(root.right, path, res)
    path.pop()
  }
}