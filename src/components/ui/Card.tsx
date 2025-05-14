import styled from 'styled-components';

interface CardProps {
  $elevated?: boolean;
  $interactive?: boolean;
}

const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${({ $elevated }) => 
    $elevated 
      ? '0 8px 32px rgba(0, 0, 0, 0.24)'
      : '0 4px 16px rgba(0, 0, 0, 0.16)'};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-in-out;

  ${({ $interactive }) => $interactive && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
    }
  `}
`;

export default Card; 