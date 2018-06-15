import React from 'react';
import typeMap from '../type-map';

// TODO sort out babelHelpers for ...rest props
export const FormField = ({ type, name, value, placeholder , ...rest  }) => {
  console.log(name, value, placeholder)
  return (
    <div className="form-field">
      <label>{ name }</label>

      { typeMap[type]({name, placeholder}) }
    </div>
  );
}

export default FormField;
