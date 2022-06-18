/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null
  let arr = [root]
  while (arr.length > 0) {
    let size = arr.length
    for (let i = 0; i < size; i++) {
      let x = arr.shift()
      if (i < size - 1) {
        x.next = arr[0]
      }
      
      if (x.left) arr.push(x.left)
      if (x.right) arr.push(x.right)
    }
  }

  return root
};