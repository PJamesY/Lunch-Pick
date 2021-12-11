import './App.css';

import List from './List';

function App() {
  const tasks = [
    { id: 1, title: '아무 일도 하기 싫다'},
    { id: 2, title: 'TDD 연습'},
  ]
  return (
    <div className="App">
      <h1>TO - Do</h1>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
