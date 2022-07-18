/*
Description:
Given the head of a linked list, rotate the list to the right by k places.
*/

/*
Example:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

var rotateRight = function(head, k) {
  if (!head) return head
  const length = lengthOfList(head)
  for (let i = 0; i < (k % length); i++) {
      let newHead = new ListNode(), node = head, prev = head
      while (node.next) {
          prev = node
          node = node.next
      }
      if (length > 0) {
          prev.next = null
          newHead.val = node.val
          newHead.next = head
          head = newHead
      }
  }
  return head
};

const lengthOfList = head => {
  let node = head, length = 0
  while (node) {
      node = node.next
      length++
  }
  return length
}