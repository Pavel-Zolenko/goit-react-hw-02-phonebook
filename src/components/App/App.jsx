import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactHandler = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(3),
      name: data.name,
      number: data.number,
    };
    const dataNameNormalized = newContact.name.toLowerCase();
    const anyName = contacts.some(
      ({ name }) => dataNameNormalized === name.toLowerCase()
    );
    const notifyError = () =>
      toast.error(`"${newContact.name}" is already in the Phonebook!`);
    const notifySucces = () =>
      toast.success(`"${newContact.name}" successfully added!`);

    if (anyName) {
      // console.log('Такий контакт вже є в контактах');
      notifyError();
      return;
    }
    // console.log('Додаю в контакти');
    notifySucces();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    
    return (
      <Container>
        <Toaster position="top-center" reverseOrder={false} />
        <section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContactHandler} />
        </section>
        <section>
          <h2>Contacts</h2>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </section>
      </Container>
    );
  }
}