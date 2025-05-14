import styled from 'styled-components';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
  component?: keyof JSX.IntrinsicElements;
  color?: string;
  align?: 'left' | 'center' | 'right';
  gutterBottom?: boolean;
}

const variantStyles = {
  h1: {
    fontSize: '48px',
    fontWeight: 600,
    letterSpacing: '-0.015em',
  },
  h2: {
    fontSize: '40px',
    fontWeight: 600,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontSize: '32px',
    fontWeight: 600,
    letterSpacing: '-0.015em',
  },
  body1: {
    fontSize: '16px',
    letterSpacing: '-0.015em',
    fontWeight: 400,
  },
  body2: {
    fontSize: '14px',
    letterSpacing: '-0.015em',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '16px',
    letterSpacing: '-0.015em',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '14px',
    letterSpacing: '-0.015em',
    fontWeight: 500,
  },
} as const;

const Typography = styled.p<TypographyProps>`
  margin: 0;
  ${({ variant = 'body1' }) => variantStyles[variant]};
  color: ${({ color, theme }) => color || theme.palette.text.primary};
  text-align: ${({ align = 'left' }) => align};
  margin-bottom: ${({ gutterBottom }) => gutterBottom ? '0.35em' : 0};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default Typography; 