import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { todos, ...otherProps } = props;

  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <TodoItem key={item._id ?? index} item={item} {...otherProps} />
      ))}
    </ul>
  );
}
