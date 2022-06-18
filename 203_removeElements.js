/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let newNode = new ListNode()
  newNode.next = head
  let cur = newNode
  while (cur) {
    if (cur.next && cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return newNode.next
};