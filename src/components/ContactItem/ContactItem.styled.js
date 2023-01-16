import styled from 'styled-components';

export const Item = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid #9ba2a8;
  font-size: 18px;
  font-weight: 500;
  :not(:last-child) {
    border-bottom: none;
  }
`;

export const Number = styled.span`
  margin-left: auto;
`;

export const DeleteBtn = styled.button`
  margin-left: 40px;
  padding: 0px 20px;
  display: inline;
  align-items: center;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  border: 2px solid #9ba2a8;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease, box-shadow 250ms ease;
  :hover,
  :focus {
    background-color: #e26565;
    box-shadow: 0px 4px 10px 4px #9ba2a8;
  }
`;