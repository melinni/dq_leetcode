/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null
  if (!head.next) return head
  let newNode = new ListNode()
  let prev = new ListNode()
  prev.next = head
  newNode.next = head.next
  let cur = head
  while (cur && cur.next) {
    let nextNode = cur.next
    cur.next = nextNode.next
    nextNode.next = cur
    prev.next = nextNode
    prev = cur
    cur = cur.next
  }

  return newNode.next
};