import './App.css';

import List from './List';

function ListContainer() {
  const tasks = [
    { id: 1, title: '아무 일도 하기 싫다'},
    { id: 2, title: 'TDD 연습'},
  ]
  return (
    <div className="ListContainer">
      <List tasks={tasks} />
    </div>
  );
}

export default ListContainer;
