import TodoAdd from './TodoAdd';

export default function TodoHeader(props) {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoAdd {...props} />
    </header>
  );
}
