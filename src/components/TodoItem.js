import React, { useState } from 'react';
import { useInput } from 'hooks/useInput';

export default function TodoItem(props) {
  const { item, onCheck, onDelete, onUpdate } = props;
  // eslint-disable-next-line
  const { setValue, ...text } = useInput(item.value);
  const [edit, setEdit] = useState(false);
  const classNameEdit = edit ? 'editing' : '';
  const classNameCompleted = item.checked ? 'completed' : '';
  const className = `${classNameEdit} ${classNameCompleted}`;

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onUpdate({ item, text });
      setEdit(false);
    }
  };

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.checked} onChange={onCheck(item)} />
        <label
          onDoubleClick={() => {
            setEdit(true);
            //TODO: проверить выполнение toggle (сначала тоглит а потом режим редактирования)
          }}
        >
          {item.value}
        </label>
        <button className="destroy" onClick={onDelete(item)}></button>
      </div>
      <input type="text" className="edit" onKeyDown={onKeyDown} {...text} />
    </li>
  );
}
