import styled from 'styled-components';

interface ContentProps {
  maxWidth?: string;
  maxHeight?: string;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 4rem);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

export const Content = styled.div<ContentProps>`
  padding: 1.5rem;
  overflow-y: auto;
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'calc(100vh - 200px)'};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #eee;
`; 