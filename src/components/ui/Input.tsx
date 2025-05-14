import React from 'react';
import {
  InputContainer,
  StyledLabel,
  StyledInput,
  HelperText
} from './Input.styles';

interface InputProps {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  error = false,
  helperText,
  fullWidth = false,
  min,
  max,
  placeholder,
  style,
  ...props
}) => {
  return (
    <InputContainer $fullWidth={fullWidth}>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
        min={min}
        max={max}
        placeholder={placeholder}
        style={style}
        {...props}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </InputContainer>
  );
};

export default Input; 