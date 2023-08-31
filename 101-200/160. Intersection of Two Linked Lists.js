// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 技巧一 map或set解决
// 时间复杂度O(m+n)
// 空间复杂度O(m)
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let map = new Map()
  while (headA) {
    map.set(headA, 1)
    headA = headA.next
  }

  while (headB) {
    if (map.get(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
};

// 技巧二 双指针，访问完其中一个后访问另一个
// 时间复杂度O(m+n)
// 空间复杂度O(1)
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  
  let pa = headA, pb = headB
  while (pa !== pb) {
    pa = pa === null ? pb : pa.next
    pb = pb === null ? pb : pb.next
  }

  return pa
};