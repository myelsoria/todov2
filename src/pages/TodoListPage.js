import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import LogoutBtn from '../components/LogoutBtn'
import TodosContainer from '../components/TodosContainer'

function TodoListPage({ history }) {
  const { username } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!username) history.push('/')
  }, [username, history])

  return (
    <Container>
      <div className='d-flex justify-content-between py-2'>
        <span className='h5'>{`${username}'s todo list`}</span>
        <LogoutBtn />
      </div>
      <TodosContainer />
    </Container>
  )
}

export default TodoListPage
