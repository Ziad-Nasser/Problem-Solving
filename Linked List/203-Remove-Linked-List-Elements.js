/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head;
    let prev = null;
    while(current){
        if(current.val === val) {
            if(prev) prev.next = current.next;
            else head = head.next;
        }
        else prev = current;
        current = current.next;
    }
    return head;
};