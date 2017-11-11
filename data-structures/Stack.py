class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next

class Stack:
    length = 0
    head = None

    def push(self, item):
        if self.head is None:
            self.head = Node(item, None)
        else:
            next = self.head
            self.head = Node(item, next)
        self.length = self.length + 1

    def pop(self):
        popped = self.head
        self.head = self.head and self.head.next
        self.length = self.length - 1 if self.length > 0 else None 
        return popped and popped.item

stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print vars(stack)

print stack.pop() # 3
print stack.pop() # 2
print stack.pop() # 1
print stack.pop() # None
