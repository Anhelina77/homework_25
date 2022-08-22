import { useInput } from '../hooks/useInput';

export default function TodoAdd(props) {
  const { onAdd } = props;
  const { setValue, ...text } = useInput('');

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAdd({ value: text.value });
      setValue('');
    }
  };

  return <input className="new-todo" placeholder="What needs to be done?" onKeyDown={onKeyDown} {...text} />;
}
