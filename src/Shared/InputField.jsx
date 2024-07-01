import React from 'react';

function InputField({ type, value, onChange, InputFieldclass, placeholderValue }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={InputFieldclass}
      placeholder={placeholderValue}
    />
  );
}

export default InputField;
