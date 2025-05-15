import styled from 'styled-components';
import Card from '../../ui/Card';
import Typography from '../../ui/Typography';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ContentSection = styled.div`
  margin-top: 2rem;
`;

export const CartItemCard = styled(Card)`
  padding: 2rem;
`;

export const CartItemArticle = styled.article<{ isLast: boolean }>`
  margin-bottom: ${({ isLast }) => isLast ? 0 : '24px'};
  padding-bottom: ${({ isLast }) => isLast ? 0 : '24px'};
  border-bottom: ${({ isLast }) => isLast ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};
`;

export const CartFooter = styled.footer`
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const TaxText = styled(Typography)`
  color: rgba(0, 0, 0, 0.6);
  margin-left: 4px;
`;

export const FlexBox = styled.div<{ gap?: number; justify?: string; align?: string }>`
  display: flex;
  gap: ${({ gap }) => gap ? `${gap}rem` : 0};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
`;

export const InputWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`; 