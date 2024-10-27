import React, { useState } from 'react';
import { Checkbox } from 'antd';

import {
  InputCont,
  Label,
  Input as InputStyled,
  LabelCont,
  ShowPassword,
  ShowPasswordLabel,
} from './styles';

export const Input = ({
  children,
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
  children?: React.ReactNode;
  labelInput: string;
  valueInput: string;
  onChangeValue: (value: string) => void;
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <InputCont>
      {type === 'password' ? (
        <LabelCont>
          <Label htmlFor={id}>{labelInput}</Label>
          <ShowPassword>
            <Checkbox checked={show} onChange={() => setShow(show => !show)} />
            <ShowPasswordLabel>exibir senha</ShowPasswordLabel>
          </ShowPassword>
        </LabelCont>
      ) : (
        <Label htmlFor={id}>{labelInput}</Label>
      )}
      <InputStyled
        {...props}
        id={id}
        type={type === 'password' && show ? 'text' : type}
        value={valueInput}
        onChange={e => onChangeValue(e.target.value)}
      />
      {children}
    </InputCont>
  );
};
