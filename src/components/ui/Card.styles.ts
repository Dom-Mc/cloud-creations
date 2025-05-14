import styled from 'styled-components';
import { CardProps } from './Card';

export const StyledCard = styled.div<CardProps>`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: ${({ $elevated }) => 
    $elevated 
      ? '0 20px 40px rgba(0, 0, 0, 0.1)'
      : '0 10px 20px rgba(0, 0, 0, 0.08)'};
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${({ $interactive }) => $interactive && `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
    }
  `}
`; 