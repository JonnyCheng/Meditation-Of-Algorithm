/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  var c1 = l1;
  var c2 = l2;
  var l3;
  var c3;
  var carry = 0;

  while (c1 || c2 || carry) {
    var v1 = 0;
    var v2 = 0;

    if (c1) {
      v1 = c1.val;
      c1 = c1.next;
    }

    if (c2) {
      v2 = c2.val;
      c2 = c2.next;
    }

    var sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    if (!c3) {
      l3 = new ListNode(sum % 10);
      c3 = l3;
    } else {
      c3.next = new ListNode(sum % 10);
      c3 = c3.next;
    }
  }
  console.log('result:',l3);
};