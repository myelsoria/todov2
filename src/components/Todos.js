import { ListGroup } from 'react-bootstrap'
import Todo from './Todo'

function Todos({ todoList, onDeleteTodo }) {
  return (
    <ListGroup>
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </ListGroup>
  )
}

export default Todos
