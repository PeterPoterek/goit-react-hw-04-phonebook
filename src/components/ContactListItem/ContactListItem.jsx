import PropTypes from 'prop-types';

import {
  ContactListLi,
  ContactListName,
  ContactListNumber,
  ContactListRemoveButton,
} from './ContactListItemStyles';

const ContactListItem = ({ name, number, id, removeContact }) => {
  return (
    <ContactListLi>
      <ContactListName>{name}</ContactListName>
      <ContactListNumber>{number}</ContactListNumber>
      <ContactListRemoveButton onClick={() => removeContact(id)}>
        Delete
      </ContactListRemoveButton>
    </ContactListLi>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
