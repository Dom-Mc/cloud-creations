import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  onChange: (value: string) => void;
}

const InputContainer = styled.div<{ $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

const StyledInput = styled.input<{ error?: boolean }>`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${({ theme, error }) => 
    error ? theme.palette.error.main : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 12px;
  padding: 10px 14px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1rem;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const HelperText = styled.span<{ error?: boolean }>`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ theme, error }) => 
    error ? theme.palette.error.main : theme.palette.text.secondary};
`;

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth,
  onChange,
  ...props
}) => {
  return (
    <InputContainer $fullWidth={fullWidth}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        error={error}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </InputContainer>
  );
};

export default Input; 