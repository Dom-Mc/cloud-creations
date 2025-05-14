import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(MuiButton)`
  border-radius: 8px;
  text-transform: none;
  transition: background-color 0.2s ease-in-out;
`;

export interface ButtonProps extends Omit<MuiButtonProps, 'css'> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button; 