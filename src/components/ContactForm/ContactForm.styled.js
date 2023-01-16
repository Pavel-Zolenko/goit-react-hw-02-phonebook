import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContact = styled(Form)`
  margin-bottom: 30px;
  padding: 10px;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  padding: 5px;
  width: 200px;
  color: #0000ff;
  border: 1px solid #9ba2a8;
  font-size: 16px;
  :hover,
  :focus {
    box-shadow: 0px 1px 5px 2px #9ba2a8;
  }
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
`;

export const AddBtn = styled.button`
  padding: 5px 20px;
  display: inline;
  align-items: center;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  border: 2px solid #9ba2a8;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease, box-shadow 250ms ease;
  :hover,
  :focus {
    background-color: #b2b2ed;
    box-shadow: 0px 4px 10px 4px #9ba2a8;
  }
`;