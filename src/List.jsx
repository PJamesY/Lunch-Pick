import './App.css';

function List({ tasks }) {
  return (
    <div className="List">
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
