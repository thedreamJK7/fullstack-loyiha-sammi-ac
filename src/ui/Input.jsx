import React from 'react'

const Input = ({
  label,
  type = "text",
  state,
  placeholder,
  setState,
}) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control mb-1"
        id={label}
        placeholder={placeholder}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input