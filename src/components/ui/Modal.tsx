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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: slideIn 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
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

  if (!open) return null;

  const modalContent = (
    <Overlay onClick={handleOverlayClick}>
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