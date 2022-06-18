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

var getIntersectionNode1 = function(headA, headB) {
  if (!headA || !headB) return null
  
  let pa = headA, pb = headB
  while (pa !== pb) {
    pa = pa === null ? pb : pa.next
    pb = pb === null ? pb : pb.next
  }

  return pa
};