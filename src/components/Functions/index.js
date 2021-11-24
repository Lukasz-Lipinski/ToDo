import { useState } from 'react';

export const useInput = (init_val = "") => {
  const [value, setValue] = useState(init_val);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}