/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 技巧一：快慢指针

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// 技巧二
var hasCycle = function(head) {
  let map = new Map()
  while(head) {
    if (map.get(head)) {
      return true
    } else {
      map.set(head, 1)
    }
    head = head.next
  }
  return false
};