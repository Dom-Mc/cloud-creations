import styled from 'styled-components';
import Typography from '../../ui/Typography';

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  width: 100%;
`;

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  svg {
    font-size: 8rem;
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center !important;
  width: 100%;
`;

export const MessageWrapper = styled.div`
  margin-bottom: 2.5rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    min-width: 200px;
    padding: 12px 32px;
    font-size: 1.1rem;
  }
`; 