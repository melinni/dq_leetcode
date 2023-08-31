/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)

  if (root === null) return res

  while (queue.length > 0) {
    let curLevel = [], len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      curLevel.push(node.val)

      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j])
      }
    }

    res.push(curLevel)
  }

  return res
};