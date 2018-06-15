import React from 'react';

export const TextInput = ({ name, value, placeholder }) => {
  return <input type="text" name={name} placeholder={placeholder} />;
}

export default TextInput;
