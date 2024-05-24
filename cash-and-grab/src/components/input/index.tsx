import React from 'react';

import { InputCont } from './styles';

export const Input = ({
  labelInput,
  id,
  type = 'text',
  valueInput,
  onChangeValue,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelInput: string;
  valueInput: string;
  onChangeValue: (value: string) => void;
}) => {
  return (
    <InputCont>
      <label htmlFor={id}>{labelInput}</label>
      <input
        {...props}
        value={valueInput}
        onChange={e => onChangeValue(e.target.value)}
      />
    </InputCont>
  );
};
