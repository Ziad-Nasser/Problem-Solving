/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head;
    let temp = new ListNode();
    temp.next = head;
    let prev = temp;
    for(i = 1; i<left;i++) {
        prev = prev.next;
    }
    let current = prev.next;
    let q = current.next;
    for(i = 0; i < right - left; i++){
        current.next = q.next;
        q.next = prev.next;
        prev.next = q;
        q = current.next;
    }
    return temp.next;
};