/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 技巧一：快慢指针
// 时间复杂度O(n)
// 空间复杂度O(1)
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

// 技巧二：巧用Map
// 时间复杂度O(n)
// 空间复杂度O(n)
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