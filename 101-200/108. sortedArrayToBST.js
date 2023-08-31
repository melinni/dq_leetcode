/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return gen(nums, 0, nums.length-1)
};

function gen(nums, start, end) {
  if (start > end) return null

  let mid = start + ((end - start) >> 1)
  let root = new TreeNode(nums[mid])
  root.left = gen(nums, start, mid - 1)
  root.right = gen(nums, mid + 1, end)

  return root
}