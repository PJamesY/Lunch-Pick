import './App.css';

function List({ tasks }) {
  return (
    <div className="List">
      <h1>TO - Do</h1>
      <ul>
          {tasks.map((task) => 
              <li key={task.id}>
                  {task.title}
              </li>
          )}
      </ul>
    </div>
  );
}

export default List;
