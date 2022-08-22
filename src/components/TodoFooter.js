import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter(props) {
  return (
    <footer className="footer">
      <TodoItemsLeft {...props} />
      <TodoFilter {...props} />
      <TodoCompleted {...props} />
    </footer>
  );
}
