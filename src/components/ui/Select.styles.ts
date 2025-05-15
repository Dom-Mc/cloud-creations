import styled from 'styled-components';
import { Select as MuiSelect, MenuItem } from '@mui/material';

export const SelectContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  gap: 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
`;

export const StyledSelect = styled(MuiSelect)<{ error?: boolean }>`
  height: 36px;
  font-size: 0.875rem;

  &.MuiOutlinedInput-root {
    color: #000;
    background-color: #fff;
    
    .MuiOutlinedInput-input {
      padding: 0 2rem 0 0.75rem;
      height: 36px;
      line-height: 36px;
      background-color: #fff;
    }

    &:hover, &.Mui-focused {
      background-color: #fff;
    }

    fieldset {
      background-color: transparent;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({ error }) => error ? '#dc3545' : '#e2e8f0'};
    border-radius: 0.375rem;
    background-color: transparent;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #3B82F6;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #3B82F6;
    border-width: 1px;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
  }

  &.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #dc3545;
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
  }

  .MuiSelect-icon {
    right: 0.75rem;
    color: #666;
  }

  &.Mui-disabled {
    background-color: #f7fafc;
    cursor: not-allowed;

    .MuiOutlinedInput-notchedOutline {
      border-color: #e2e8f0;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  color: #000;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  &.Mui-selected {
    background-color: #ebf5ff;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
`; 