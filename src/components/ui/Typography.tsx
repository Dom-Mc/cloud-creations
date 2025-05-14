import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
  component?: keyof JSX.IntrinsicElements;
  color?: string;
  align?: 'left' | 'center' | 'right';
  gutterBottom?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface StyledTypographyProps extends Omit<TypographyProps, 'component' | 'variant' | 'gutterBottom'> {
  $variant: NonNullable<TypographyProps['variant']>;
  $gutterBottom?: boolean;
}

const variantStyles = {
  h1: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  body1: {
    fontSize: '16px',
    lineHeight: 1.5,
    letterSpacing: '-0.015em',
    fontWeight: 400,
  },
  body2: {
    fontSize: '14px',
    lineHeight: 1.5,
    letterSpacing: '-0.015em',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '16px',
    lineHeight: 1.5,
    letterSpacing: '-0.015em',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '14px',
    lineHeight: 1.5,
    letterSpacing: '-0.015em',
    fontWeight: 500,
  },
} as const;

const StyledTypography = styled.p<StyledTypographyProps>`
  margin: 0;
  ${({ $variant }) => variantStyles[$variant]};
  color: ${({ color, theme }) => color || theme.palette.text.primary};
  text-align: ${({ align = 'left' }) => align};
  margin-bottom: ${({ $gutterBottom }) => $gutterBottom ? '0.25em' : 0};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body1',
  component,
  gutterBottom,
  children,
  ...props 
}) => {
  const Component = component || (variant?.startsWith('h') ? variant : 'p');
  
  return (
    <StyledTypography
      as={Component}
      $variant={variant}
      $gutterBottom={gutterBottom}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography; 