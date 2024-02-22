import { Component } from "react";
import css from "./ContactRender.module.css";
import PropTypes from "prop-types";

export class ContactRender extends Component {
  handleDelet = (e) => {
    this.props.onClick(e.target.name);
  };

  render() {
    return this.props.contacts.map((el) => (
      <li key={el.id}>
        {el.name}: {el.number}
        <button name={el.id} onClick={this.handleDelet} className={css.delete}>
          Delete
        </button>
      </li>
    ));
  }
}
