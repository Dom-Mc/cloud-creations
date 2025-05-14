import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 20px;
  padding: 24px;
  min-width: 320px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface ContentProps {
  $hasActions: boolean;
}

const Content = styled.div<ContentProps>`
  margin-bottom: ${({ $hasActions }) => $hasActions ? '24px' : 0};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <Overlay isOpen={open} onClick={handleOverlayClick}>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {title && <Title>{title}</Title>}
        <Content $hasActions={!!actions}>
          {children}
        </Content>
        {actions && <Actions>{actions}</Actions>}
      </ModalContainer>
    </Overlay>
  );

  return createPortal(modalContent, document.body);
};

export default Modal; 