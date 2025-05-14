import styled from 'styled-components';
import { Select as MuiSelect, MenuItem } from '@mui/material';

export const SelectContainer = styled.div<{ $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const StyledSelect = styled(MuiSelect)<{ error?: boolean }>`
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 6px;
  font-size: 0.875rem;
  height: 36px;

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({ theme, error }) => 
      error ? theme.palette.error.main : theme.palette.divider};
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.primary.main};
    border-width: 1px;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main}15;
  }

  .MuiSelect-select {
    padding: 8px 12px;
    color: ${({ theme }) => theme.palette.text.primary};
    background: ${({ theme }) => theme.palette.background.default} !important;
    
    &:focus {
      background: ${({ theme }) => theme.palette.background.default};
    }
  }

  .MuiSelect-icon {
    right: 8px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 0.875rem;
  padding: 8px 12px;
`; 