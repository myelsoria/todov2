import { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

function Todo({ todo, onDeleteTodo }) {
  const [deleteBtn, setDeleteBtn] = useState(false)

  return (
    <ListGroup.Item
      style={{ padding: '4px 12px', minHeight: '42px' }}
      className='d-flex justify-content-between align-items-center'
      onMouseEnter={() => setDeleteBtn(true)}
      onMouseLeave={() => setDeleteBtn(false)}
      onMouseOver={() => setDeleteBtn(true)}
    >
      <span className='text-break'>{todo.todoText}</span>
      {deleteBtn && (
        <Button
          variant='danger'
          size='sm'
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </Button>
      )}
    </ListGroup.Item>
  )
}

export default Todo
