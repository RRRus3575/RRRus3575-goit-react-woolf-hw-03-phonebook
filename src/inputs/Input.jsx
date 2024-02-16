import css from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({ label, name, value, type, onChange }) => {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        required
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
