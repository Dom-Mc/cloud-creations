import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 4rem auto;
`;

const ShowcaseCard = styled.div`
  background: #141414;
  border-radius: 12px;
  padding: 1.5rem;
  aspect-ratio: 4/3;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const StageCard = styled(ShowcaseCard)`
  animation-delay: 0.2s;

  .stage-header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .stage-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #666;
    transition: background-color 0.3s ease;
    
    &.active {
      background: #4CAF50;
    }
  }

  .stage-content {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    font-family: monospace;
    font-size: 0.875rem;
    color: #A1A1A1;
  }
`;

const AccessCard = styled(ShowcaseCard)`
  animation-delay: 0.4s;

  .feature-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: #A1A1A1;
    border-radius: 6px;
    transition: background-color 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    
    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4CAF50;
    }

    .feature-name {
      flex: 1;
    }

    .feature-status {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;

const progressAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const MetricsCard = styled(ShowcaseCard)`
  animation-delay: 0.6s;

  .graph {
    margin-top: 2rem;
    height: 120px;
    background: linear-gradient(180deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 100%);
    border-radius: 8px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: #4CAF50;
      transform-origin: left;
      animation: ${progressAnimation} 2s ease-out infinite;
    }
  }

  .metrics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    .metric-value {
      color: #4CAF50;
      font-weight: 500;
    }
  }
`;

const FeatureShowcase: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ShowcaseContainer>
      <StageCard>
        <div className="stage-header">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`stage-dot ${index === activeStage ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="stage-content">
          {`if (stage === 'beta') {
  enableFeature('newUI');
}`}
        </div>
      </StageCard>
      
      <AccessCard>
        <div className="feature-row">
          <span className="status-dot" />
          <span className="feature-name">Chat</span>
          <span className="feature-status">Enabled</span>
        </div>
        <div className="feature-row">
          <span className="status-dot" />
          <span className="feature-name">Analytics</span>
          <span className="feature-status">Beta</span>
        </div>
        <div className="feature-row">
          <span className="status-dot" />
          <span className="feature-name">API Access</span>
          <span className="feature-status">Pro</span>
        </div>
      </AccessCard>
      
      <MetricsCard>
        <div className="metrics-header">
          <span>Feature Adoption</span>
          <span className="metric-value">+24%</span>
        </div>
        <div className="graph" />
      </MetricsCard>
    </ShowcaseContainer>
  );
};

export default FeatureShowcase; 