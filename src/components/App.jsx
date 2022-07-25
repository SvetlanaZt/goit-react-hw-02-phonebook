import React from 'react';
import Form from './Form/form'
import Filter from './Filter/filter';
import { nanoid } from 'nanoid'
import Contacts from './Contacts/contacts';


export class App extends React.Component {
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
 }
  
  takeData = (evt) => {
    const { name, number } = evt;

    const takeContactName = this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (takeContactName) {
      alert(`${name} is already in contacts`)
      return
     }
      this.setState(prevState => {
        return {
          contacts: [{ name, number, id: nanoid() }, ...prevState.contacts]
        }
      })
  }

  changeInput = (evt) => { 
    this.setState({ filter: evt.currentTarget.value})
  }

   onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
  const onChangeInput = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return (
      <div>
         <h1>Phonebook</h1>
        <Form onClick={this.takeData} />
        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeInput} />
        <Contacts value={onChangeInput} onDelete={this.onDelete} />
        </div>
    )
   }
}