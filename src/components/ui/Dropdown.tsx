import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[];
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  onChange: (value: string | number) => void;
}

const Container = styled.div<{ $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.palette.text.primary};
    pointer-events: none;
  }
`;

const StyledSelect = styled.select<{ error?: boolean }>`
  appearance: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${({ theme, error }) => 
    error ? theme.palette.error.main : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 12px;
  padding: 10px 14px;
  padding-right: 32px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary.main};
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 8px;
  }
`;

const HelperText = styled.span<{ error?: boolean }>`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ theme, error }) => 
    error ? theme.palette.error.main : theme.palette.text.secondary};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  error,
  helperText,
  fullWidth = true,
  onChange,
  ...props
}) => {
  return (
    <Container $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <StyledSelect
          error={error}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectContainer>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Container>
  );
};

export default Dropdown; 