/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = []
  sort(root, res)
  return res
};

function sort(root, res) {
if (root === null) return
res.push(root.val)

for (let ch of root.children) {
  sort(ch, res)
}
}