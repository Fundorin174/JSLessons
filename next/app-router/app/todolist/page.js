async function fetchData() {
  const resp = await fetch("http://localhost:3000/api/todoItem", {
    method: 'GET',
  });
  return resp.json();
}


const TodoList = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Список задач</h1>
      {data.map(({ title, completed }) => {
        return <div>
          <span>{title}</span>
          <p>{completed ? 'Сделано' : 'В работе'}</p>
        </div>
      })}
    </div>
  )
}

export default TodoList

