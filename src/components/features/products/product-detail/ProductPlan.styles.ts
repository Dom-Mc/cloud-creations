import styled from 'styled-components';

export const PlanContainer = styled.section`
  margin-top: 16px;
`;

export const PlanOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 16px 0;
  max-width: 600px;
`;

export const PlanCard = styled.button<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 2px solid ${({ $isSelected, theme }) => 
    $isSelected ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${({ $isSelected }) => $isSelected ? '#000' : '#fff'};
  color: ${({ $isSelected }) => $isSelected ? '#fff' : '#000'};
  width: 100%;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  .period {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .price {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 2px;
  }

  .save {
    color: ${({ theme }) => theme.palette.success.main};
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const QuantitySection = styled.div`
  margin: 16px 0;
  max-width: 120px;

  /* Fix input border visibility */
  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 36px;
  }
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const ActionSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`; 