import React, { Component } from "react";
import uniqid from "uniqid";
import { Form } from "./Form/Form";
import { Input } from "./inputs/Input";
import { ContactRender } from "./ContactRender/ConstactRender";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    newData: [],
    filter: "",
  };
  handleDelete = (nameEl) => {
    this.setState((prev) => {
      return { contacts: prev.contacts.filter(({ id }) => id !== nameEl) };
    });
  };
  handleSubmit = (name, number) => {
    if (
      this.state.contacts.find(
        (el) => el.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    }

    this.setState((prev) => {
      return {
        contacts: prev.contacts.concat({
          name: name,
          number: number,
          id: uniqid(),
        }),
      };
    });
  };

  handleSearch = ({ target: { value: filter } }) => {
    this.setState({
      filter,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    if (this.state.filter !== prevState.filter) {
      console.log(this.state.newDate);
      const newData = this.state.contacts.filter((el) =>
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      this.setState({
        newData,
      });
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
        newData: parsedContacts,
      });
    }
  }

  render() {
    return (
      <div
        style={{
          margin: 50,
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit} />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h2>Contacts</h2>
            <Input
              onChange={this.handleSearch}
              value={this.state.filter}
              type={"text"}
              name={"filter"}
              label={"Find contacts by name"}
            />
            <ul>
              <ContactRender
                contacts={this.state.newData}
                onClick={this.handleDelete}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
