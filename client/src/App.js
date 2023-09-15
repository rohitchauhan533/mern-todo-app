import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import './App.scss';
import { CreateTodo } from './components/createTodo';
import { ShowTodoList } from './components/showTodoList';

function App() {
  return (
    <div className="app-contents">
    <BrowserRouter>
      <Routes>
      <Route exact path="/" component={ ShowTodoList } />
      <Route exact path="/" component={ CreateTodo } />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
