/*
Description
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    let head = lists[0]
    for (let i = 1; i < lists.length; i++) {
        head = mergeTwoLists(head, lists[i])
    }
    return head

    function mergeTwoLists(l1, l2) {
        if (!l1) return l2
        if (!l2) return l1
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }
    }
};