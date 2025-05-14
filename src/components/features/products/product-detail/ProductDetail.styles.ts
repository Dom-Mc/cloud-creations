import styled from 'styled-components';
import Card from '../../../ui/Card';

export const DetailCard = styled(Card)`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;
`;

export const DetailHeader = styled.header`
  margin-bottom: 24px;
`;

export const DetailSection = styled.section`
  > * + * {
    margin-top: 32px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const BackButton = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  z-index: 10;
  
  button {
    background: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  }
`; 