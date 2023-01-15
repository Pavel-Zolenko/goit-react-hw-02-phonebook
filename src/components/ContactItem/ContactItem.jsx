import { PropTypes } from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Remove
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};