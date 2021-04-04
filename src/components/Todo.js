import { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

function Todo({ todo, onDeleteTodo }) {
  const [deleteBtn, setDeleteBtn] = useState(false)

  return (
    <ListGroup.Item
      style={{ minHeight: '42px !important', padding: '4px 12px' }}
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
