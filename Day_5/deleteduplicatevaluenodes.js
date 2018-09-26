// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    
         var current=head;
        if(head==null)
        {
            return head;
        }
        else{
            while(current.next!=null)
            {
                if(current.data==current.next.data)
                {
                    if(current.next.next==null)
                    {
                        current.next=null;
                    }
                    else{
                    current.next=current.next.next;
                    }
                }
                else
                {
                    current=current.next;
                }
                
            }
            return head;
        }


}