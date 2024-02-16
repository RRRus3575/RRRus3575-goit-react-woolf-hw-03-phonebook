import { Component } from 'react';
import css from './Form.module.css';
import { Input } from '../inputs/Input';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    e.target.reset();
  };

  render() {
    const { form, submit } = css;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" className={form}>
        <Input
          onChange={this.handleChange}
          type={'text'}
          name={'name'}
          label={'Name'}
          required
        />
        <Input
          onChange={this.handleChange}
          type={'tel'}
          name={'number'}
          label={'Number'}
          required
        />
        <button type="submit" className={submit}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
