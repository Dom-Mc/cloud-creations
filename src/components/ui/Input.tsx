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
  gap: 4px;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const StyledInput = styled.input<{ error?: boolean }>`
  background: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme, error }) => 
    error ? theme.palette.error.main : theme.palette.divider};
  border-radius: 6px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.875rem;
  width: 100%;
  height: 36px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main}15;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const HelperText = styled.span<{ error?: boolean }>`
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