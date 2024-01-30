import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from 'components/Filter/Filter.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const AppWrapper = styled.div`
  background-color: #1f2937;
  max-width: 750px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const AppHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;

class App extends Component {
  constructor(props) {
    super(props);

    const storedState = JSON.parse(localStorage.getItem('phonebook')) || {
      contacts: [],
      filter: '',
      name: '',
      number: '',
    };

    this.state = storedState;
  }

  componentDidUpdate() {
    localStorage.setItem('phonebook', JSON.stringify(this.state));
  }

  handleAddContact = e => {
    e.preventDefault();

    const nameInput = e.target[0];
    const nameInputValue = nameInput.value;
    const namePattern = new RegExp(nameInput.pattern);

    const numberInput = e.target[1];
    const numberInputValue = numberInput.value;
    const numberPattern = new RegExp(numberInput.pattern);

    const isContactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === nameInputValue.toLowerCase()
    );

    if (isContactExists) {
      alert(`${nameInputValue} is already in contacts.`);
      return;
    }

    if (
      namePattern.test(nameInputValue) &&
      numberPattern.test(numberInputValue)
    ) {
      const newContact = {
        id: `id-${nanoid()}`,
        name: nameInputValue,
        number: numberInputValue,
      };

      this.setState(prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      const errorMessage = namePattern.test(nameInputValue)
        ? numberInput.title
        : nameInput.title;
      alert(errorMessage);
    }
  };

  handleRemoveContact = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filterValue => {
    this.setState(prevState => ({
      ...prevState,
      filter: filterValue,
    }));
  };

  render() {
    return (
      <>
        <AppContainer>
          <AppWrapper>
            <AppHeader>Phonebook</AppHeader>
            <ContactForm addContact={this.handleAddContact} />

            <AppHeader>Contacts</AppHeader>
            <Filter handleFilterChange={this.handleFilterChange} />
            <ContactList
              state={this.state}
              removeContact={this.handleRemoveContact}
            />
          </AppWrapper>
        </AppContainer>
      </>
    );
  }
}

export default App;
