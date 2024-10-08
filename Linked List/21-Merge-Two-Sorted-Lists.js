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
    let temp =new ListNode();
    let current = temp;
    while (list1 && list2) {
        if(list2.val < list1.val) {
            current.next = list2;
            list2 = list2.next;
        }
        else{
            current.next = list1;
            list1 = list1.next;
        }
        current = current.next;
    }
    current.next = list1 || list2
    return temp.next
};