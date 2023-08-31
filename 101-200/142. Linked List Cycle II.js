
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 技巧一 Map
// 时间复杂度O(n)
// 空间复杂度O(n)
var detectCycle = function(head) {
  let map = new Map()
  while(head) {
    if (map.get(head)) {
      return head
    } else {
      map.set(head, 1)
    }
    head = head.next
  }
  return null
};

// 技巧二 快慢指针
// 时间复杂度O(n)
// 空间复杂度O(1)
var detectCycle = function(head) {
  let slow = head, fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      fast = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }

  return null
}