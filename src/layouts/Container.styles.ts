import styled from 'styled-components';

interface ContainerProps {
  $fluid?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ $fluid }) => $fluid ? '100%' : '1200px'};
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
`; 