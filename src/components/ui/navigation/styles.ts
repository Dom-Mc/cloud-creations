import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';

// Main navigation container
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  position: relative;
  z-index: 20;

  &.landing-page {
    a {
      color: #fff;
    }
  }
`;

// Logo styling
export const Logo = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.25rem;
  font-weight: 600;
  transition: opacity 0.2s ease;
  z-index: 21;

  &:hover {
    opacity: 0.8;
  }
`;

// Right section of navigation
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 21;
`;

// Navigation links container
export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: opacity 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    z-index: 21;

    &:hover {
      opacity: 0.8;
    }
  }
`;

// Auth buttons container
export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

// Primary button styling
export const PrimaryButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.palette.primary.contrastText};
  color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.light};
    transform: translateY(-1px);
  }
`;

// Secondary button styling
export const SecondaryButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }
`;

// Cart link styling
export const CartLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;
  position: relative;
  color: #000;
  padding: 0.5rem;
  border-radius: 4px;
  z-index: 21;
  cursor: pointer;

  .landing-page & {
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    font-size: 1.5rem;
    pointer-events: none;
  }
`;

// Cart badge styling
export const CartBadge = styled.span`
  background: #3B82F6;
  color: #fff;
  border-radius: 12px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  top: -8px;
  right: -12px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`; 