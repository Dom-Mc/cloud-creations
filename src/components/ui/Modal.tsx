import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContainer,
  Title,
  Content,
  Actions
} from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  maxWidth,
  maxHeight
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <Overlay ref={overlayRef} onClick={handleOverlayClick}>
      <ModalContainer role="dialog" aria-modal="true">
        {title && <Title>{title}</Title>}
        <Content maxWidth={maxWidth} maxHeight={maxHeight}>
          {children}
        </Content>
        {actions && <Actions>{actions}</Actions>}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

export default Modal; 