/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let currentNode = list1.val <= list2.val ? list1 : list2;
  let startNode = list1.val <= list2.val ? list1 : list2;
  if (list1.val <= list2.val) {
    list1 = list1.next;
  } else {
    list2 = list2.next;
  }
  
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
      currentNode = currentNode.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
      currentNode = currentNode.next;
    }
  }

  if (list1) {
    currentNode.next = list1;
  } else {
    currentNode.next = list2;
  }

  return startNode;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};