import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';
import { ContactListContainer, ContactListUl } from './ContactListStyles';

const ContactList = ({ state, removeContact }) => {
  const filteredContacts = state.contacts.filter(contact => {
    const name = contact.name.toLowerCase();
    const filterText = state.filter.toLowerCase();
    return (
      name.includes(filterText) ||
      name.split(' ').some(part => part.startsWith(filterText))
    );
  });

  return (
    <ContactListContainer>
      <ContactListUl>
        {filteredContacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              removeContact={removeContact}
            />
          );
        })}
      </ContactListUl>
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
