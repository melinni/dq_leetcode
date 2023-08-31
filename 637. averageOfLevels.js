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
var averageOfLevels = function(root) {
  let res = [], queue = []
  queue.push(root)

  if (root === null) return res

  while (queue.length > 0) {
    let curLevel = 0, len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      curLevel += node.val

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    res.push(curLevel / len)
  }

  return res
};