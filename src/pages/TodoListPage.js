import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function TodoListPage({ history }) {
  const { username } = useSelector((state) => state.userLogin)
  
  useEffect(() => {
    if (!username) history.push('/')
  }, [username, history])
  
  return (
    <div className='container'>
      <span className='h5'>{`${username}'s todo list`}</span>
    </div>
  )
}

export default TodoListPage
