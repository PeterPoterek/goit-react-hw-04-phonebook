import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;

  gap: 0.5rem;
`;

export const FilterLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  font-size: 1rem;

  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
