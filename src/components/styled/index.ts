import styled from 'styled-components';

export const PageContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ContentSection = styled.section`
  margin: 40px 0;
`;

export const GlassCard = styled.div`
  background: #ffffff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const FlexBox = styled.div<{
  direction?: 'row' | 'column';
  gap?: number;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap = 2 }) => gap * 8}px;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
`;

export const GridContainer = styled.div<{
  columns?: number;
  gap?: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${({ gap = 2 }) => gap * 8}px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, ${({ theme }) => theme.palette.background.default} 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.05) 100%);
    pointer-events: none;
  }
`;

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`; 