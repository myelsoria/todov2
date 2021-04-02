import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TodoListPage from './pages/TodoListPage'

function App() {
  return (
    <div className="App min-vh-100">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route path='/todolist' component={TodoListPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
