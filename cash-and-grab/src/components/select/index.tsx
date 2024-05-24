import React from 'react';

import { SelectCont } from './styles';

export const Select = ({
  options,
  labelInput,
  id,
  valueInput,
  onChangeValue,
  ...props
}: React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Array<{
    value: string;
    label: string;
  }>;
  labelInput: string;
  valueInput: string;
  onChangeValue: (value: string) => void;
}) => {
  return (
    <SelectCont>
      <label htmlFor={id}>{labelInput}</label>
      <select {...props} id={id} onChange={e => onChangeValue(e.target.value)}>
        <option value=""></option>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </SelectCont>
  );
};
