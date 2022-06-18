/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  return traverse(root, 1)
};

function traverse(root, height) {
  if (!root.children || root.children.length === 0) return height
  let tmp = []
  for (let child of root.children) {
    let h = traverse(child, height+1)
    tmp.push(h)
  }
  return Math.max(...tmp)
}