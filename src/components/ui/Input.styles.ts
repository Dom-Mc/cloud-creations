import styled from 'styled-components';

export const InputContainer = styled.div<{ $fullWidth?: boolean }>`
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

export const StyledInput = styled.input<{ error?: boolean }>`
  height: 36px;
  padding: 0 0.75rem;
  border: 1px solid ${({ error }) => error ? '#dc3545' : '#e2e8f0'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
  transition: all 0.2s ease;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: ${({ error }) => error ? '#dc3545' : '#3B82F6'};
    box-shadow: 0 0 0 2px ${({ error }) => error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(59, 130, 246, 0.25)'};
  }

  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    background-color: #f7fafc;
    cursor: not-allowed;
  }
`;

export const HelperText = styled.span<{ error?: boolean }>`
  font-size: 0.75rem;
  color: ${({ error }) => error ? '#dc3545' : '#666'};
  line-height: 1.25;
`; 