import React from 'react';

import { SelectCont, Label, Select as SelectInput, Option } from './styles';

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
      <Label htmlFor={id}>{labelInput}</Label>
      <SelectInput
        {...props}
        id={id}
        onChange={e => onChangeValue(e.target.value)}
      >
        <Option value=""></Option>
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectInput>
    </SelectCont>
  );
};
