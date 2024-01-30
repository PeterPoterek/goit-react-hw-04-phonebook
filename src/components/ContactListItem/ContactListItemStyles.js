import styled from 'styled-components';

export const ContactListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ContactListName = styled.span`
  font-weight: bold;
`;

export const ContactListNumber = styled.span`
  margin-left: 10px;
  color: #d6d3d1;
`;

export const ContactListRemoveButton = styled.button`
  background-color: #dc2626;
  color: #d6d3d1;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  margin-left: 5px;

  transition: background-color 0.3s;

  &:hover {
    background-color: #b91c1c;
  }

  &:active {
    background-color: #ef4444;
  }
`;
