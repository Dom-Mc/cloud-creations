import React from 'react';
import { Select as MuiSelect, FormControl, InputLabel } from '@mui/material';
import { SelectContainer, StyledLabel, StyledSelect, StyledMenuItem } from './Select.styles';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  fullWidth?: boolean;
  error?: boolean;
}

const Select: React.FC<SelectProps> = ({ 
  id, 
  label, 
  value, 
  options, 
  onChange,
  fullWidth = false,
  error = false
}) => {
  return (
    <SelectContainer $fullWidth={fullWidth}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect
        id={id}
        value={value}
        error={error}
        onChange={(e) => onChange(e.target.value as string)}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '6px',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }
          }
        }}
      >
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default Select; 