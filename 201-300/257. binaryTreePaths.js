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
  let rec = (root,str) => {
    // 叶子节点
    if(!root.left && !root.right){
        res.push(str+root.val) // 加入解集
        return
    }
    // 非叶子节点
    str += root.val + '->'
    root.left && rec(root.left, str) // 递归左子树
    root.right && rec(root.right, str) // 递归右子树
  }
  rec(root, '')
  return res
};
