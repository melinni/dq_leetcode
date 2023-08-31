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
var rob = function(root) {
  let mapF = new Map()
  let mapG = new Map()

  const dfs = (node) => {
    if (node === null) {
      return
    }

    dfs(node.left)
    dfs(node.right)

    mapF.set(node, (mapG.get(node.left) || 0) + (mapG.get(node.right) || 0) + node.val)
    mapG.set(
      node,
      Math.max((mapG.get(node.left) || 0), (mapF.get(node.left) || 0)) + 
      Math.max((mapG.get(node.right) || 0), (mapF.get(node.right) || 0))
      )
  }

  dfs(root)

  return Math.max(mapF.get(root) || 0, mapG.get(root) || 0)
};