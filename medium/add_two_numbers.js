/*
Description:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/*
Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
*/

var addTwoNumbers = function(l1, l2) {
  let values = [];
  let overflow = 0;
  while (l1.next || l2.next) {
      const value = (l1.val + l2.val + overflow) % 10;
      overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
      values.push(value);

      l1 = l1.next || new ListNode(0);
      l2 = l2.next || new ListNode(0);
  }
  const value = (l1.val + l2.val + overflow) % 10;
  overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
  values.push(value);
  if (overflow === 1) {
      values.push(1);
  }
  let node = undefined;
  values.reverse().forEach(item => {
      if (node === undefined) {
          node = new ListNode(item);
      } else {
          const newNode = new ListNode(item);
          newNode.next = node;
          node = newNode;
      }
  });
  return node;
};