import { useState } from 'react'
import AddForm from './AddForm'
import Todos from './Todos'

function TodosContainer() {
  const [todoList, setTodolist] = useState([])

  const addTodoHandler = (todo) => {
    setTodolist([...todoList, todo])
  }

  const deleteTodoHandler = (id) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id)
    setTodolist(filteredTodoList)
  }

  return (
    <>
      <AddForm onAddTodo={addTodoHandler} />
      <Todos todoList={todoList} onDeleteTodo={deleteTodoHandler} />
    </>
  )
}

export default TodosContainer
