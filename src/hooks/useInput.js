import { useState } from 'react';

export const useInput = function (initialValue, name = '', callback) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value);
    try {
      callback && callback({ value: e.target.value, name });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    value,
    name,
    onChange: handleChange,
    setValue,
  };
};
