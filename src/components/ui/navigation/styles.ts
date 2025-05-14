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
  position: relative;
  z-index: 100;
  background: transparent;

  .landing-page & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 1400px) {
    padding: 1rem 2rem;
  }
`;

// Logo styling
export const Logo = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.2s ease;

  .landing-page & {
    color: #ffffff;

    &:hover {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

// Right section of navigation
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

// Navigation links container
export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #000000;
    text-decoration: none;
    font-size: 0.9375rem;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .landing-page & {
      color: rgba(255, 255, 255, 0.8);

      &:hover {
        color: #ffffff;
        transform: scale(1.05);
      }
    }

    &:hover {
      opacity: 0.7;
      transform: scale(1.05);
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
  color: #000000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  position: relative;

  .landing-page & {
    color: rgba(255, 255, 255, 0.8);

    &:hover {
      color: #ffffff;
      transform: scale(1.05);
    }
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.5rem;
  }
`;

// Cart badge styling
export const CartBadge = styled.span`
  background: #3B82F6;
  color: #ffffff;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`; 