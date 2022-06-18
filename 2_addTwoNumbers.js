/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let curry= 0, node, prevNode
  while (l1 || l2 || curry !== 0) {
    let val1 = l1.val ? l1.val : 0
    let val2 = l2.val ? l2.val : 0
    
    let sum = val1 + val2 + curry
    curry = Math.floor(sum / 10)
    const newNode = new ListNode()
    newNode.val = sum % 10
    if (prevNode) {
      prevNode.next = newNode
    } else {
      node = newNode
    }

    prevNode = newNode

    l1 = l1?.next
    l2 = l2?.next
  }

  return node
};
