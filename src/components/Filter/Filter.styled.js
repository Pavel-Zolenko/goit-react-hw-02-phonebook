import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  font-size: 18px;
`;

export const FilterInput = styled.input`
  padding: 5px;
  color: #1f6451;
  border: 1px solid #9ba2a8;
  font-size: 16px;
  :hover,
  :focus {
    box-shadow: 0px 1px 5px 2px #9ba2a8;
  }
`;