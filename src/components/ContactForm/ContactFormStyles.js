import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const ContactFormUI = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const ContactFormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 1.5rem;
`;

export const ContactFormInput = styled.input`
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ContactFormAddButton = styled.button`
  font-size: 1.5rem;
  background-color: #16a34a;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #128d3f;
  }

  &:active {
    background-color: #86efac;
  }
`;
