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
  let queue = []
  queue.push(root)

  if (root === null) return root

  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (i < len - 1) {
        node.next = queue[0]
      } else {
        node.next = null
      }

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  return root
};