import React, { ChangeEvent } from "react";

type PropsInput = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle: string;
};

const Input: React.FC<PropsInput> = ({ value, handleChange, inputStyle }) => (
  <input className={inputStyle} maxLength={50} type="text" value={value} onChange={handleChange} />
);

export default Input;
